import React, { useState } from 'react'

const PROJECTS = [
  {
    title: "RapiXchange",
    desc: "Advanced crypto trading platform with real-time notifications, P2P trading, and comprehensive admin dashboard.",
    tech: ["Angular", "Node.js", "React.js", "WebSockets", "MongoDB"],
    category: "Crypto Exchange",
    features: ["Real-time Trading", "P2P Marketplace", "Admin Dashboard", "Mobile Responsive"],
    gradient: "from-blue-500 to-purple-600",
    icon: "🚀",
    hasLiveDemo: true,
    liveUrl: "https://web.rapixchange.com/"
  },
  {
    title: "Cupchairs",
    desc: "A platform that transforms music into content and content into earnings, benefiting musicians, photographers, and token holders.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "Blockchain"],
    category: "Music Platform",
    features: ["Token Ownership", "Earnings Distribution", "Artist Interviews", "Content Monetization"],
    gradient: "from-purple-500 to-pink-600",
    icon: "🎵",
    hasLiveDemo: true,
    liveUrl: "https://cupchairs.com"
  },
  {
    title: "Crytominal",
    desc: "Comprehensive cryptocurrency terminal with advanced trading features, portfolio management, and market analysis tools.",
    tech: ["React.js", "Node.js", "WebSocket", "Chart.js", "MongoDB"],
    category: "Trading Platform",
    features: ["Advanced Trading", "Portfolio Management", "Market Analysis", "Real-time Data"],
    gradient: "from-green-500 to-teal-600",
    icon: "📊",
    hasLiveDemo: false
  },
  {
    title: "Coinchain",
    desc: "Blockchain-based cryptocurrency platform with smart contract integration and decentralized trading capabilities.",
    tech: ["React.js", "Solidity", "Web3", "Node.js", "IPFS"],
    category: "DeFi Platform",
    features: ["Smart Contracts", "DeFi Trading", "Decentralized Exchange", "Token Management"],
    gradient: "from-indigo-500 to-purple-600",
    icon: "⛓️",
    hasLiveDemo: false
  },
  {
    title: "Muda",
    desc: "Multi-asset trading platform with cross-chain compatibility and advanced order management system.",
    tech: ["Angular", "Node.js", "WebSocket", "Blockchain", "Redis"],
    category: "Trading Platform",
    features: ["Cross-chain Trading", "Multi-asset Support", "Advanced Orders", "Risk Management"],
    gradient: "from-orange-500 to-red-600",
    icon: "🔄",
    hasLiveDemo: false
  },
  {
    title: "Bitzuri",
    desc: "Cryptocurrency exchange with focus on security, compliance, and institutional trading features.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    category: "Crypto Exchange",
    features: ["Institutional Trading", "Advanced Security", "Compliance Tools", "API Integration"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "🏦",
    hasLiveDemo: false
  },
  {
    title: "Werecoin",
    desc: "Social cryptocurrency platform with community features, staking rewards, and governance mechanisms.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "Solidity"],
    category: "Social Platform",
    features: ["Social Trading", "Staking Rewards", "Governance", "Community Features"],
    gradient: "from-pink-500 to-purple-600",
    icon: "👥",
    hasLiveDemo: false
  },
  {
    title: "KwExchange",
    desc: "High-performance cryptocurrency exchange with advanced matching engine and institutional features.",
    tech: ["Angular", "C++", "Node.js", "PostgreSQL", "Redis"],
    category: "Crypto Exchange",
    features: ["High Performance", "Advanced Matching", "Institutional Features", "Low Latency"],
    gradient: "from-yellow-500 to-orange-600",
    icon: "⚡",
    hasLiveDemo: false
  },
  {
    title: "Ausfinex & Bitflex",
    desc: "Full-featured crypto exchange with live charts, secure wallet integration, and multiple order types.",
    tech: ["Angular", "Node.js", "WebSocket", "Chart.js", "Blockchain"],
    category: "Trading Platform",
    features: ["Live Charts", "Secure Wallets", "Order Management", "Real-time Data"],
    gradient: "from-green-500 to-teal-600",
    icon: "📈",
    hasLiveDemo: false
  },
  {
    title: "Bizzcoin ICO",
    desc: "Secure Initial Coin Offering platform for token launches and comprehensive investor management.",
    tech: ["Angular", "Node.js", "Blockchain", "Payment Gateway", "KYC"],
    category: "ICO Platform",
    features: ["Token Launch", "Investor Management", "KYC Integration", "Payment Processing"],
    gradient: "from-yellow-500 to-orange-600",
    icon: "💰",
    hasLiveDemo: false
  }
]

export default function Projects(){
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Crypto Exchange', 'Trading Platform', 'Music Platform', 'DeFi Platform', 'Social Platform', 'ICO Platform']

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="mb-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-300 text-lg">Showcasing my expertise in crypto and fintech development</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="group relative"
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-white/10 max-w-sm mx-auto">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <span className="text-xs text-cyan-300 font-semibold">{project.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">#{index + 1}</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.desc}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-cyan-300 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.features.map(feature => (
                    <span 
                      key={feature}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-purple-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effects */}
              {hoveredProject === project.title && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl animate-pulse"></div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-3 border-t border-white/10">
                <button 
                  onClick={() => handleViewDetails(project)}
                  className="flex-1 px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  View Details
                </button>
                {project.hasLiveDemo && (
                  <button 
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank')
                      } else {
                        alert(`Demo for ${project.title} would open here. This is a placeholder for the live demo link.`)
                      }
                    }}
                    className="px-3 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <span className="text-lg text-cyan-300 font-semibold">{selectedProject.category}</span>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.desc}</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Project Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-semibold text-cyan-300 mb-1">Performance</div>
                    <div className="text-xs text-gray-300">Optimized for high-speed trading and real-time data processing</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg border border-green-500/20">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-semibold text-green-300 mb-1">Security</div>
                    <div className="text-xs text-gray-300">Enterprise-grade security with multi-layer protection</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-semibold text-purple-300 mb-1">Responsive</div>
                    <div className="text-xs text-gray-300">Fully responsive design for all devices and screen sizes</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-white/10">
                {selectedProject.hasLiveDemo && (
                  <button 
                    onClick={() => {
                      if (selectedProject.liveUrl) {
                        window.open(selectedProject.liveUrl, '_blank')
                      } else {
                        alert(`Demo for ${selectedProject.title} would open here. This is a placeholder for the live demo link.`)
                      }
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 View Live Demo
                  </button>
                )}
                <button 
                  onClick={closeModal}
                  className={`px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 ${selectedProject.hasLiveDemo ? '' : 'flex-1'}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
