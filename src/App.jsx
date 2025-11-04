import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingLayout from './layouts/LandingLayout.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import FarmerDashboard from './pages/farmer/Dashboard.jsx'
import FarmerCropList from './pages/farmer/CropList.jsx'
import FarmerCropForm from './pages/farmer/CropForm.jsx'
import FarmerProposals from './pages/farmer/Proposals.jsx'
import FarmerDeals from './pages/farmer/Deals.jsx'
import FarmerProfile from './pages/farmer/Profile.jsx'
import BuyerBrowse from './pages/buyer/Browse.jsx'
import BuyerProposals from './pages/buyer/Proposals.jsx'
import BuyerChat from './pages/buyer/Chat.jsx'
import BuyerProfile from './pages/buyer/Profile.jsx'
import EmpAssignments from './pages/employee/Assignments.jsx'
import EmpQualityCheck from './pages/employee/QualityCheck.jsx'
import EmployeeProfile from './pages/employee/Profile.jsx'
import AdminUsers from './pages/admin/Users.jsx'
import AdminReports from './pages/admin/Reports.jsx'
import AdminSettings from './pages/admin/Settings.jsx'
import AdminProfile from './pages/admin/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <Routes>
        {/* Landing Page */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Auth Pages */}
        <Route element={<RootLayout />}> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          {/* Farmer */}
          <Route path="/farmer" element={<Navigate to="/farmer/dashboard" replace />} />
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/crops" element={<FarmerCropList />} />
          <Route path="/farmer/crops/new" element={<FarmerCropForm />} />
          <Route path="/farmer/proposals" element={<FarmerProposals />} />
          <Route path="/farmer/deals" element={<FarmerDeals />} />
          <Route path="/farmer/profile" element={<FarmerProfile />} />

          {/* Buyer */}
          <Route path="/buyer" element={<Navigate to="/buyer/browse" replace />} />
          <Route path="/buyer/browse" element={<BuyerBrowse />} />
          <Route path="/buyer/proposals" element={<BuyerProposals />} />
          <Route path="/buyer/chat" element={<BuyerChat />} />
          <Route path="/buyer/profile" element={<BuyerProfile />} />

          {/* Employee */}
          <Route path="/employee" element={<Navigate to="/employee/assignments" replace />} />
          <Route path="/employee/assignments" element={<EmpAssignments />} />
          <Route path="/employee/quality" element={<EmpQualityCheck />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />

          {/* Admin */}
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
