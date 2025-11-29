import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Dashboards
import AdminDashboard from './components/dashboards/AdminDashboard'
import CitizenDashboard from './components/dashboards/CitizenDashboard'
import ObserverDashboard from './components/dashboards/ObserverDashboard'
import AnalystDashboard from './components/dashboards/AnalystDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Dashboard Routes */}
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/citizen"
                element={
                  <ProtectedRoute requiredRole="citizen">
                    <CitizenDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/observer"
                element={
                  <ProtectedRoute requiredRole="observer">
                    <ObserverDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/analyst"
                element={
                  <ProtectedRoute requiredRole="analyst">
                    <AnalystDashboard />
                  </ProtectedRoute>
                }
              />
              
              {/* Redirect to home if route not found */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App


