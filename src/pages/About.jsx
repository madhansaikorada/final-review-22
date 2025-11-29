import { motion } from 'framer-motion'

const About = () => {
  const values = [
    {
      title: 'Transparency',
      description: 'We believe in complete transparency in all election processes.',
      icon: '👁️',
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethical conduct.',
      icon: '⚖️',
    },
    {
      title: 'Accessibility',
      description: 'Making election information accessible to everyone.',
      icon: '🌐',
    },
    {
      title: 'Innovation',
      description: 'Using cutting-edge technology to improve democracy.',
      icon: '💡',
    },
  ]

  const stats = [
    { number: '100+', label: 'Elections Monitored' },
    { number: '50K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to ensuring fair, transparent, and democratic
            elections through innovative technology and civic engagement.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to create a comprehensive platform that monitors
            elections, prevents fraud, tracks election processes, and encourages
            civic engagement among voters. We provide clear and reliable
            information to ensure that every vote counts and every election is
            conducted fairly and transparently.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-600 text-white rounded-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Registration & Authentication
                </h3>
                <p className="text-gray-600">
                  Users register with role-based access (Admin, Citizen,
                  Observer, or Data Analyst).
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Real-time Monitoring
                </h3>
                <p className="text-gray-600">
                  The platform tracks election processes, votes, and activities
                  in real-time.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Reporting & Analysis
                </h3>
                <p className="text-gray-600">
                  Users can report issues, analyze data, and generate
                  comprehensive reports.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Civic Engagement
                </h3>
                <p className="text-gray-600">
                  Citizens can engage in discussions, access information, and
                  participate actively in the democratic process.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About


