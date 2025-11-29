import { motion } from 'framer-motion'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12,543', change: '+5.2%' },
    { label: 'Active Elections', value: '8', change: '+2' },
    { label: 'Reports Today', value: '234', change: '+12%' },
    { label: 'System Health', value: '99.9%', change: 'Stable' },
  ]

  const recentActivities = [
    { id: 1, action: 'User registration', user: 'John Doe', time: '2 mins ago' },
    { id: 2, action: 'Election data updated', user: 'System', time: '15 mins ago' },
    { id: 3, action: 'Security alert resolved', user: 'Admin', time: '1 hour ago' },
    { id: 4, action: 'Report generated', user: 'Data Analyst', time: '2 hours ago' },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage the system, monitor election data, and ensure platform security
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-green-600">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Management */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">System Management</h2>
            <div className="space-y-4">
              <button className="btn-primary w-full">Manage Users</button>
              <button className="btn-primary w-full">Configure Elections</button>
              <button className="btn-primary w-full">Security Settings</button>
              <button className="btn-primary w-full">System Logs</button>
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="border-b border-gray-200 pb-3 last:border-0"
                >
                  <div className="font-semibold text-gray-900">
                    {activity.action}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activity.user} • {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard


