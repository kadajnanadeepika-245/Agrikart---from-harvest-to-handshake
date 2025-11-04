export default function EmpQualityCheck() {
  const checks = [
    { id: 'c1', crop: 'Tomatoes', farmer: 'Ravi', freshness: 'Pass', size: 'Pass', packaging: 'Fail' },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Quality Checks</h2>
      <div className="grid gap-3">
        {checks.map(c => (
          <div key={c.id} className="card p-4">
            <p className="font-medium">{c.crop} · {c.farmer}</p>
            <div className="text-sm text-gray-500">Freshness: {c.freshness} · Size: {c.size} · Packaging: {c.packaging}</div>
            <div className="mt-3 flex gap-2">
              <button className="btn-outline">Upload Report</button>
              <button className="btn-outline">Flag Listing</button>
              <button className="btn-primary">Send Feedback</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
