import { motion } from 'framer-motion'
import { useState } from 'react'

const CitizenDashboard = () => {
  const [reportForm, setReportForm] = useState({
    title: '',
    description: '',
    category: '',
  })

  const elections = [
    { id: 1, name: 'Presidential Election 2024', status: 'Active', date: '2024-11-05' },
    { id: 2, name: 'Local Council Elections', status: 'Upcoming', date: '2024-12-10' },
    { id: 3, name: 'Senate Elections', status: 'Completed', date: '2024-09-15' },
  ]

  const discussions = [
    { id: 1, topic: 'Voter Registration Process', replies: 23, lastActivity: '2 hours ago' },
    { id: 2, topic: 'Election Transparency', replies: 45, lastActivity: '5 hours ago' },
    { id: 3, topic: 'Civic Engagement Tips', replies: 12, lastActivity: '1 day ago' },
  ]

  const handleReportSubmit = (e) => {
    e.preventDefault()
    alert('Report submitted successfully! Thank you for your contribution.')
    setReportForm({ title: '', description: '', category: '' })
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Citizen Dashboard
          </h1>
          <p className="text-gray-600">
            Track election processes, report issues, and engage in civic discussions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Elections Tracking */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 card"
          >
            <h2 className="text-2xl font-bold mb-4">Election Tracking</h2>
            <div className="space-y-4">
              {elections.map((election) => (
                <div
                  key={election.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{election.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        election.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : election.status === 'Upcoming'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {election.status}
                    </span>
                  </div>
                  <p className="text-gray-600">Date: {election.date}</p>
                  <button className="mt-3 text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Report Issue */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={reportForm.category}
                  onChange={(e) =>
                    setReportForm({ ...reportForm, category: e.target.value })
                  }
                  className="input-field"
                  required
                >
                  <option value="">Select category</option>
                  <option value="fraud">Potential Fraud</option>
                  <option value="irregularity">Irregularity</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={reportForm.title}
                  onChange={(e) =>
                    setReportForm({ ...reportForm, title: e.target.value })
                  }
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={reportForm.description}
                  onChange={(e) =>
                    setReportForm({ ...reportForm, description: e.target.value })
                  }
                  rows="4"
                  className="input-field"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Report
              </button>
            </form>
          </motion.div>
        </div>

        {/* Civic Discussions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Civic Discussions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{discussion.topic}</h3>
                <div className="text-sm text-gray-600">
                  {discussion.replies} replies • {discussion.lastActivity}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CitizenDashboard


