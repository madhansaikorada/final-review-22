import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' },
    ],
    'Resources': [
      { path: '/', label: 'Election Guidelines' },
      { path: '/', label: 'Voter Education' },
      { path: '/', label: 'Reports' },
    ],
    'Legal': [
      { path: '/', label: 'Privacy Policy' },
      { path: '/', label: 'Terms of Service' },
      { path: '/', label: 'Accessibility' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Election Monitor
            </h3>
            <p className="text-sm">
              Ensuring fair, transparent, and democratic elections through
              technology and civic engagement.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm"
        >
          <p>
            &copy; {currentYear} Election Monitoring System. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


