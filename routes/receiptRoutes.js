const express = require('express')
const PDFDocument = require('pdfkit')
const router = express.Router()

router.get('/:dealId/pdf', (req,res)=>{
  const {dealId} = req.params
  const doc = new PDFDocument()
  res.setHeader('Content-Type','application/pdf')
  res.setHeader('Content-Disposition', `attachment; filename="receipt-${dealId}.pdf"`)
  doc.text(`Agrikart Receipt - Deal ${dealId}`)
  doc.text('\nThank you for using Agrikart.')
  doc.end()
  doc.pipe(res)
})

module.exports = router
