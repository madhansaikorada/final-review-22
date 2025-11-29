import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captchaInput: '',
  })
  const [captcha, setCaptcha] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setCaptcha(code)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    // CAPTCHA check
    if (formData.captchaInput.toUpperCase() !== captcha) {
      setIsLoading(false)
      setError('Invalid CAPTCHA. Please try again.')
      generateCaptcha()
      setFormData({ ...formData, captchaInput: '' })
      return
    }

    // LocalStorage authentication simulation
    const users = JSON.parse(localStorage.getItem('election_users') || '[]')
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    )

    await new Promise(resolve => setTimeout(resolve, 500))

    if (user) {
      setSuccess('Authentication successful! Redirecting...')
      login({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })
      setTimeout(() => {
        navigate(`/dashboard/${user.role}`)
      }, 1000)
    } else {
      setIsLoading(false)
      setError('Invalid email or password.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <div className="card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-600">Sign in to access your dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2"
            >
              <span className="font-medium">{error}</span>
            </motion.div>
          )}

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border-2 border-green-300 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2"
            >
              <span className="font-medium">{success}</span>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your password"
              />
            </div>

            {/* CAPTCHA Display */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CAPTCHA Verification
              </label>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-gray-200 font-bold text-gray-800 tracking-widest rounded-lg text-lg">
                  {captcha}
                </div>

                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-primary-600 hover:text-primary-500 font-semibold"
                >
                  Refresh
                </button>
              </div>

              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
                required
                className="input-field mt-2"
                placeholder="Enter the CAPTCHA above"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              disabled={isLoading}
              className={`btn-primary w-full ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  Authenticating...
                </span>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
