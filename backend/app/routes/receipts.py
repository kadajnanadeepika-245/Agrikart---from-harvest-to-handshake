from fastapi import APIRouter, Response
from reportlab.pdfgen import canvas
from io import BytesIO

router = APIRouter()


@router.get("/{deal_id}/pdf")
def receipt_pdf(deal_id: int):
    buffer = BytesIO()
    p = canvas.Canvas(buffer)
    p.drawString(100, 800, f"Agrikart Receipt - Deal {deal_id}")
    p.drawString(100, 780, "Thank you for using Agrikart.")
    p.showPage()
    p.save()
    buffer.seek(0)
    return Response(content=buffer.read(), media_type="application/pdf")
