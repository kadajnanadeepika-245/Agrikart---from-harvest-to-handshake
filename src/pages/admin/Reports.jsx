export default function AdminReports() {
  const stats = [
    { label: 'Total Sales', value: '₹4.2L' },
    { label: 'Active Deals', value: '23' },
    { label: 'Platform Users', value: '1,204' },
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Reports</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {stats.map(s => (
          <div key={s.label} className="card p-4">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-2xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
      <button className="btn-outline">Generate CSV</button>
    </div>
  )
}
