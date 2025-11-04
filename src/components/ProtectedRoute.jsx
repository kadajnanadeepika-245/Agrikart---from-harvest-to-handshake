import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/auth.jsx'

export default function ProtectedRoute({ children }) {
  const { user } = useAuthStore()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return children
}
