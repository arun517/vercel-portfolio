import React, { useState, useEffect } from 'react'

const SKILLS = [
  { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-500", level: 95 },
  { name: "Redux / RTK", icon: "🔄", color: "from-purple-500 to-pink-500", level: 90 },
  { name: "RTK Query", icon: "🔍", color: "from-indigo-500 to-purple-500", level: 85 },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-indigo-600", level: 88 },
  { name: "Vite", icon: "⚡", color: "from-yellow-500 to-orange-500", level: 80 },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-teal-500", level: 92 },
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500", level: 85 },
  { name: "WebSockets", icon: "🔌", color: "from-red-500 to-pink-500", level: 82 },
  { name: "Performance Optimization", icon: "⚡", color: "from-yellow-400 to-orange-400", level: 90 },
  { name: "Testing", icon: "🧪", color: "from-green-400 to-cyan-400", level: 75 }
]

export default function Skills(){
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [animatedSkills, setAnimatedSkills] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(SKILLS)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="mb-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-300 text-lg">Technologies I work with to build amazing experiences</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {SKILLS.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 max-w-32 mx-auto">
              <div className="text-4xl mb-3 group-hover:animate-bounce">
                {skill.icon}
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                {skill.name}
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                    transitionDelay: hoveredSkill === skill.name ? '0.2s' : '0s'
                  }}
                ></div>
              </div>
              
              {hoveredSkill === skill.name && (
                <div className="text-xs text-cyan-300 font-semibold animate-fade-in">
                  {skill.level}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Specialized Areas */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Specialized Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            {
              title: "Frontend Development",
              description: "Building responsive, performant user interfaces with modern frameworks",
              technologies: ["React.js", "Angular", "TypeScript", "Tailwind CSS"],
              icon: "💻"
            },
            {
              title: "Backend Development", 
              description: "Creating scalable server-side applications and APIs",
              technologies: ["Node.js", "Express", "WebSockets", "REST APIs"],
              icon: "⚙️"
            },
            {
              title: "Crypto & FinTech",
              description: "Developing trading platforms and DeFi solutions",
              technologies: ["Web3", "Blockchain", "Trading APIs", "Real-time Data"],
              icon: "₿"
            }
          ].map((area, index) => (
            <div 
              key={area.title}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105 max-w-sm mx-auto"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
              <p className="text-gray-300 mb-4 text-sm">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
