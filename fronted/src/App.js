import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';

// Layout & Components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

// Protected Route Component
const ProtectedRoute = ({ role }) => {
  const { user, loading } = React.useContext(AuthContext);
  
  if (loading) return <div className="h-screen flex text-awaDeepBlue items-center justify-center font-bold text-2xl animate-pulse">Initializing Portal...</div>;
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  
  return <Outlet />;
};

// Dashboard Layout with Sidebar (No Footer)
const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
       <Navbar />
       <div className="flex flex-1 overflow-hidden bg-gray-50">
          <Sidebar />
          <div className="flex-1 overflow-y-auto w-full relative">
             <div className="relative z-10 w-full h-full">
                <Outlet />
             </div>
          </div>
       </div>
    </div>
  );
};

// Public Layout (With Footer)
const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes with standard Layout including Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          
          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoute role="admin" />}>
            <Route element={<DashboardLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/students" element={<AdminDashboard />} />
            </Route>
          </Route>

          {/* Student Protected Routes */}
          <Route element={<ProtectedRoute role="student" />}>
            <Route element={<DashboardLayout />}>
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/student/courses" element={<StudentDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
