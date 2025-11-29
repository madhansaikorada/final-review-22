import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const Landing = () => {
  const { isAuthenticated } = useAuth()

  const features = [
    {
      icon: '🔒',
      title: 'Secure & Transparent',
      description: 'Advanced security measures ensure election integrity and transparency.',
    },
    {
      icon: '📊',
      title: 'Real-time Monitoring',
      description: 'Track election processes in real-time with comprehensive data analytics.',
    },
    {
      icon: '👥',
      title: 'Civic Engagement',
      description: 'Encourage participation and provide clear information to all voters.',
    },
    {
      icon: '🛡️',
      title: 'Fraud Prevention',
      description: 'Advanced systems to detect and prevent election fraud.',
    },
  ]

  const roles = [
    {
      role: 'Admin',
      description: 'Manage the system, monitor election data, and ensure platform security.',
      color: 'bg-red-500',
    },
    {
      role: 'Citizen',
      description: 'Track election processes, report issues, and engage in civic discussions.',
      color: 'bg-blue-500',
    },
    {
      role: 'Election Observer',
      description: 'Monitor election activities, report anomalies, and provide insights.',
      color: 'bg-green-500',
    },
    {
      role: 'Data Analyst',
      description: 'Analyze election data, generate reports, and provide real-time updates.',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fair & Transparent Elections
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Empowering democracy through technology and civic engagement
            </p>
            {!isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center space-x-4"
              >
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg text-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for transparent and fair elections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Can Use This Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Different roles for different needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <div className={`${item.color} w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                  {item.role[0]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Join us in ensuring fair and transparent elections
              </p>
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg text-lg"
                >
                  Create Account
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Landing


