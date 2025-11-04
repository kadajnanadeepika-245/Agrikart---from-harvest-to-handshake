export default function BuyerProposals() {
  const proposals = [
    { id: 'p1', farmer: 'Ravi', crop: 'Tomatoes', offered: 24, qty: 120, status: 'Pending' },
    { id: 'p2', farmer: 'Anita', crop: 'Onions', offered: 17, qty: 200, status: 'Accepted' },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Proposals</h2>
      <div className="grid gap-3">
        {proposals.map(p => (
          <div key={p.id} className="card p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{p.crop} from {p.farmer}</p>
              <p className="text-sm text-gray-500">₹{p.offered}/kg · {p.qty} kg</p>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-brand-50 text-brand-700">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
