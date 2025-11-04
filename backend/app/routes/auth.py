from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.exc import IntegrityError
from sqlmodel import select
from passlib.context import CryptContext
from datetime import datetime, timedelta
import os

from ..db import get_session
from ..models import User
from ..core.security import create_access_token, create_refresh_token, decode_token

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()


class RegisterIn(BaseModel):
    name: str
    email: str
    password: str
    role: str = "buyer"


class TokenOut(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)


def get_password_hash(password):
    return pwd_context.hash(password)


@router.post("/register", response_model=dict)
async def register(data: RegisterIn, session=Depends(get_session)):
    user = User(name=data.name, email=data.email, hashed_password=get_password_hash(data.password), role=data.role)
    try:
        session.add(user)
        await session.commit()
        await session.refresh(user)
    except IntegrityError:
        raise HTTPException(status_code=400, detail="User exists")
    return {"id": user.id, "email": user.email}


@router.post("/login", response_model=TokenOut)
async def login(form_data: RegisterIn, session=Depends(get_session)):
    q = select(User).where(User.email == form_data.email)
    result = await session.exec(q)
    user = result.first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    access = create_access_token({"sub": str(user.id), "role": user.role})
    refresh = create_refresh_token({"sub": str(user.id)})
    return {"access_token": access, "refresh_token": refresh}


class RefreshIn(BaseModel):
    refresh_token: str


@router.post("/refresh", response_model=TokenOut)
async def refresh_token(data: RefreshIn):
    payload = decode_token(data.refresh_token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    user_id = payload.get("sub")
    # In a full implementation you'd verify refresh token is still valid (db/blacklist)
    access = create_access_token({"sub": str(user_id)})
    refresh = create_refresh_token({"sub": str(user_id)})
    return {"access_token": access, "refresh_token": refresh}
