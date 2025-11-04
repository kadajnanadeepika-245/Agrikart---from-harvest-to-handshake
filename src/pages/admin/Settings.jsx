export default function AdminSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">System Settings</h2>
      <div className="card p-4 space-y-3">
        <label className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input type="checkbox" defaultChecked className="h-4 w-4" />
        </label>
        <label className="flex items-center justify-between">
          <span>Default Language</span>
          <select className="border rounded-lg px-2 py-1 bg-transparent">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </label>
      </div>
    </div>
  )
}
