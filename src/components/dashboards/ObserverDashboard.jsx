import { motion } from 'framer-motion'
import { useState } from 'react'

const ObserverDashboard = () => {
  const [anomalies, setAnomalies] = useState([
    { id: 1, type: 'Voting Irregularity', location: 'Polling Station 12', severity: 'High', status: 'Pending' },
    { id: 2, type: 'Equipment Malfunction', location: 'Polling Station 5', severity: 'Medium', status: 'Investigating' },
    { id: 3, type: 'Long Wait Times', location: 'Polling Station 8', severity: 'Low', status: 'Resolved' },
  ])

  const observations = [
    { id: 1, observation: 'Voter turnout higher than expected', time: '10:30 AM', location: 'District A' },
    { id: 2, observation: 'All procedures followed correctly', time: '11:15 AM', location: 'District B' },
    { id: 3, observation: 'Security measures in place', time: '12:00 PM', location: 'District C' },
  ]

  const reportAnomaly = () => {
    alert('Anomaly reporting form opened')
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
            Election Observer Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor election activities, report anomalies, and provide insights on fairness and transparency
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <div className="text-3xl font-bold text-primary-600 mb-1">24</div>
            <div className="text-sm text-gray-600">Polling Stations</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <div className="text-3xl font-bold text-green-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Anomalies Reported</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="card text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-1">156</div>
            <div className="text-sm text-gray-600">Observations</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="card text-center"
          >
            <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Compliance Rate</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Anomalies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Reported Anomalies</h2>
              <button onClick={reportAnomaly} className="btn-primary">
                Report New
              </button>
            </div>
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div
                  key={anomaly.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{anomaly.type}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        anomaly.severity === 'High'
                          ? 'bg-red-100 text-red-800'
                          : anomaly.severity === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {anomaly.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Location: {anomaly.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        anomaly.status === 'Resolved'
                          ? 'text-green-600'
                          : anomaly.status === 'Investigating'
                          ? 'text-yellow-600'
                          : 'text-gray-600'
                      }`}
                    >
                      Status: {anomaly.status}
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Observations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4">Recent Observations</h2>
            <div className="space-y-3">
              {observations.map((obs) => (
                <div
                  key={obs.id}
                  className="border-l-4 border-primary-500 pl-4 py-2"
                >
                  <p className="font-medium text-gray-900">{obs.observation}</p>
                  <div className="text-sm text-gray-600 mt-1">
                    {obs.location} • {obs.time}
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 btn-secondary w-full">
              Add Observation
            </button>
          </motion.div>
        </div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Fairness & Transparency Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">✅ Strengths</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• High voter turnout observed</li>
                <li>• Clear voting procedures</li>
                <li>• Adequate security measures</li>
                <li>• Transparent vote counting</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Areas for Improvement</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Some polling stations need more staff</li>
                <li>• Wait times could be reduced</li>
                <li>• Better signage needed at some locations</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ObserverDashboard


