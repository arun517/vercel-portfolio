import React, { useState, useEffect } from 'react'

export default function Resume(){
  const [activeTab, setActiveTab] = useState('experience')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('resume')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Crypto Exchange Platforms",
      period: "2020 - Present",
      description: "Leading development of multiple cryptocurrency exchange platforms with real-time trading capabilities.",
      achievements: [
        "Built 10+ crypto exchanges with real-time trading features",
        "Implemented WebSocket connections for live market data",
        "Developed P2P trading systems with secure escrow",
        "Created admin dashboards with advanced analytics"
      ],
      technologies: ["React.js", "Angular", "Node.js", "WebSocket", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "FinTech Solutions",
      period: "2018 - 2020",
      description: "Developed comprehensive financial technology solutions including trading platforms and payment systems.",
      achievements: [
        "Built scalable trading platforms handling 1000+ concurrent users",
        "Implemented secure payment processing systems",
        "Developed real-time charting and analytics tools",
        "Created mobile-responsive trading interfaces"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Tech Startups",
      period: "2016 - 2018",
      description: "Worked on various startup projects focusing on modern web technologies and user experience.",
      achievements: [
        "Developed responsive web applications",
        "Implemented modern UI/UX designs",
        "Optimized application performance",
        "Collaborated with design teams"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Himachal Pradesh Technical University",
      year: "2011 - 2015",
      description: "Specialized in software development and information technology fundamentals."
    }
  ]



  return (
    <section id="resume" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Professional Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, expertise, and achievements in the tech industry
          </p>
        </div>

        {/* Interactive Resume Container */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-6">
            {[
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'education', label: 'Education', icon: '🎓' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-xl text-cyan-300 font-semibold mb-1">{exp.company}</p>
                        <p className="text-gray-400">{exp.period}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-400 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-xl text-cyan-300 font-semibold mb-1">{edu.field}</p>
                        <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                        <p className="text-gray-400">{edu.year}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <div className="text-right">
                          <div className="text-4xl mb-2">🎓</div>
                          <div className="text-sm text-gray-400">Graduated</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}


          </div>

          {/* Download Resume Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => {
                // Open resume with auto-download query param
                window.open('/Arun_Thakur_Advanced_Resume.html?download=1', '_blank');
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>📄</span>
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
