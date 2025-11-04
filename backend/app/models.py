from typing import Optional, List
from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    phone: Optional[str] = None
    role: str = "buyer"  # buyer | farmer | employee | admin
    hashed_password: str
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)


class FarmerProfile(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    farm_name: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    crops: Optional[str] = None


class Listing(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    farmer_id: int = Field(foreign_key="user.id")
    crop_name: str
    variety: Optional[str] = None
    images: Optional[str] = None
    price_per_unit: float
    quantity: float
    available_from: Optional[datetime] = None
    status: str = "Available"
    quality_tags: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Proposal(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    listing_id: int = Field(foreign_key="listing.id")
    buyer_id: int = Field(foreign_key="user.id")
    proposed_price: float
    proposed_quantity: float
    status: str = "pending"
    history: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Deal(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    listing_snapshot: Optional[str] = None
    final_price: float = 0
    final_quantity: float = 0
    farmer_id: int = Field(foreign_key="user.id")
    buyer_id: int = Field(foreign_key="user.id")
    status: str = "pending"
    receipt_url: Optional[str] = None
    completed_at: Optional[datetime] = None


class QualityCheck(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    listing_id: int = Field(foreign_key="listing.id")
    employee_id: int = Field(foreign_key="user.id")
    pass_fail: Optional[bool] = None
    remarks: Optional[str] = None
    media: Optional[str] = None


class Rating(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    from_user: int = Field(foreign_key="user.id")
    to_user: int = Field(foreign_key="user.id")
    stars: int = 5
    comment: Optional[str] = None


class Chat(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    listing_id: Optional[int] = Field(default=None, foreign_key="listing.id")
    participants: Optional[str] = None


class Message(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    chat_id: int = Field(foreign_key="chat.id")
    sender_id: int = Field(foreign_key="user.id")
    text: Optional[str] = None
    attachments: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)
