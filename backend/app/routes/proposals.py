from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlmodel import select

from ..db import get_session
from ..models import Proposal

router = APIRouter()


@router.post("/", response_model=Proposal)
async def create_proposal(p: Proposal, session=Depends(get_session)):
    session.add(p)
    await session.commit()
    await session.refresh(p)
    return p


@router.get("/", response_model=List[Proposal])
async def list_proposals(session=Depends(get_session)):
    q = select(Proposal).order_by(Proposal.created_at.desc())
    result = await session.exec(q)
    return result.all()


@router.put("/{proposal_id}", response_model=Proposal)
async def update_proposal(proposal_id: int, p_in: Proposal, session=Depends(get_session)):
    p = await session.get(Proposal, proposal_id)
    if not p:
        raise HTTPException(status_code=404, detail="Proposal not found")
    p.proposed_price = p_in.proposed_price
    p.proposed_quantity = p_in.proposed_quantity
    p.status = p_in.status
    await session.commit()
    await session.refresh(p)
    return p
