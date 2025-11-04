import { Outlet } from 'react-router-dom'
import LandingHeader from '../components/LandingHeader.jsx'

export default function LandingLayout() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <Outlet />
    </div>
  )
}
