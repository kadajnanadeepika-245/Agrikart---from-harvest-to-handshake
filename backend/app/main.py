from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import listings, auth, chat, receipts, proposals

app = FastAPI(title="Agrikart API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(listings.router, prefix="/listings", tags=["listings"])
app.include_router(chat.router, prefix="/chat", tags=["chat"])
app.include_router(receipts.router, prefix="/receipts", tags=["receipts"])
app.include_router(proposals.router, prefix="/proposals", tags=["proposals"])

@app.get("/")
def root():
    return {"ok": True, "service": "Agrikart"}
