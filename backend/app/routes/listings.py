from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlmodel import select

from ..db import get_session
from ..models import Listing

router = APIRouter()


@router.get("/", response_model=List[Listing])
async def list_listings(session=Depends(get_session)):
    q = select(Listing).order_by(Listing.created_at.desc())
    result = await session.exec(q)
    return result.all()


@router.post("/", response_model=Listing)
async def create_listing(listing: Listing, session=Depends(get_session)):
    session.add(listing)
    await session.commit()
    await session.refresh(listing)
    return listing


@router.get("/{listing_id}", response_model=Listing)
async def get_listing(listing_id: int, session=Depends(get_session)):
    listing = await session.get(Listing, listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    return listing


@router.put("/{listing_id}", response_model=Listing)
async def update_listing(listing_id: int, listing_in: Listing, session=Depends(get_session)):
    listing = await session.get(Listing, listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    listing.crop_name = listing_in.crop_name
    listing.price_per_unit = listing_in.price_per_unit
    listing.quantity = listing_in.quantity
    await session.commit()
    await session.refresh(listing)
    return listing


@router.delete("/{listing_id}")
async def delete_listing(listing_id: int, session=Depends(get_session)):
    listing = await session.get(Listing, listing_id)
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    await session.delete(listing)
    await session.commit()
    return {"ok": True}
