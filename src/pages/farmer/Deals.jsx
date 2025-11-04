export default function FarmerDeals() {
  const deals = [
    { id: 'd1', buyer: 'FreshMart', crop: 'Tomatoes', qty: 120, total: 2880, status: 'Completed' },
    { id: 'd2', buyer: 'GreenGrocer', crop: 'Onions', qty: 200, total: 3600, status: 'In Progress' },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Deals & Earnings</h2>
      <div className="grid gap-3">
        {deals.map(d => (
          <div key={d.id} className="card p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{d.crop} · {d.qty} kg</p>
              <p className="text-sm text-gray-500">Buyer: {d.buyer}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">₹{d.total}</p>
              <p className="text-xs text-gray-500">{d.status}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-outline">Download Receipt (PDF)</button>
    </div>
  )
}
