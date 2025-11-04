export default function FarmerProposals() {
  const proposals = [
    { id: 'p1', buyer: 'FreshMart', price: 24, qty: 150, status: 'Pending' },
    { id: 'p2', buyer: 'GreenGrocer', price: 26, qty: 100, status: 'In Negotiation' },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Buyer Proposals</h2>
      <div className="grid gap-3">
        {proposals.map(p => (
          <div key={p.id} className="card p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{p.buyer}</p>
              <p className="text-sm text-gray-500">₹{p.price}/kg · {p.qty} kg</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-outline">Reject</button>
              <button className="btn-outline">Counter</button>
              <button className="btn-primary">Accept</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
