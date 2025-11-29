import { motion } from 'framer-motion'

const AnalystDashboard = () => {
  const analytics = [
    { label: 'Total Votes Cast', value: '2,456,789', trend: '+12.5%' },
    { label: 'Voter Turnout', value: '68.3%', trend: '+3.2%' },
    { label: 'Active Polling Stations', value: '1,234', trend: '100%' },
    { label: 'Reports Generated', value: '45', trend: '+8' },
  ]

  const recentReports = [
    { id: 1, title: 'Voter Turnout Analysis', date: '2024-11-01', type: 'PDF' },
    { id: 2, title: 'Real-time Election Data', date: '2024-11-01', type: 'Excel' },
    { id: 3, title: 'Regional Statistics', date: '2024-10-31', type: 'PDF' },
    { id: 4, title: 'Demographic Breakdown', date: '2024-10-30', type: 'CSV' },
  ]

  const realTimeData = [
    { region: 'North', votes: 456789, percentage: 28.5 },
    { region: 'South', votes: 523456, percentage: 32.7 },
    { region: 'East', votes: 412345, percentage: 25.8 },
    { region: 'West', votes: 406789, percentage: 25.4 },
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
            Data Analyst Dashboard
          </h1>
          <p className="text-gray-600">
            Analyze election data, generate reports, and provide real-time updates
          </p>
        </motion.div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analytics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-green-600">{stat.trend}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real-time Data */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Real-time Election Data</h2>
              <span className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
                Live
              </span>
            </div>
            <div className="space-y-4">
              {realTimeData.map((data) => (
                <div key={data.region}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{data.region} Region</span>
                    <span className="text-sm text-gray-600">
                      {data.votes.toLocaleString()} votes
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${data.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-primary-600 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {data.percentage}% of total
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 btn-primary w-full">Export Data</button>
          </motion.div>

          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Recent Reports</h2>
              <button className="btn-primary">Generate New</button>
            </div>
            <div className="space-y-3">
              {recentReports.map((report) => (
                <div
                  key={report.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{report.title}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {report.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{report.date}</span>
                    <div className="space-x-2">
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View
                      </button>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Data Visualization</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Voter Demographics</h3>
              <p className="text-sm opacity-90">Age, gender, and location breakdown</p>
              <button className="mt-4 bg-white text-primary-600 px-4 py-2 rounded text-sm font-medium">
                View Chart →
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Turnout Trends</h3>
              <p className="text-sm opacity-90">Historical comparison and trends</p>
              <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded text-sm font-medium">
                View Chart →
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Regional Analysis</h3>
              <p className="text-sm opacity-90">Geographic distribution and patterns</p>
              <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded text-sm font-medium">
                View Chart →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnalystDashboard


