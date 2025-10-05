import React, { useState, useEffect } from 'react'

export default function Hero(){
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  
  const texts = [
    'Frontend Architect',
    'React.js Developer', 
    'Crypto Exchange Builder',
    'DeFi Solutions Expert',
    'FinTech Specialist',
    'Blockchain Developer',
    'Full Stack Engineer'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < texts.length) {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('hero')
    if (element) observer.observe(element)

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <header id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y * 0.1}px`,
            left: `${mousePosition.x * 0.1}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y * -0.1 + 200}px`,
            right: `${mousePosition.x * 0.1}px`,
            transform: 'translate(50%, -50%)'
          }}
        ></div>
      </div>
      
      {/* Interactive particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Profile section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20 animate-ping z-0"></div>
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse z-0"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse z-0"></div>
            
            {/* Main profile circle */}
            <div 
              className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 animate-profile-glow animate-profile-float"
              style={{
                transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
              }}
            >
              {/* Profile Image */}
              <img 
                src="/profile-v2.png"
                alt="Arun Thakur"
                className="w-full h-full object-cover relative z-20"
                style={{ display: 'block' }}
                onError={(e) => {
                  console.log('Image failed to load, showing fallback');
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
                onLoad={() => {
                  console.log('Profile image loaded successfully');
                }}
              />
              
              {/* Fallback initials */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-4xl tracking-wider z-10" style={{ display: 'none' }}>
                AT
              </div>
              
              {/* Floating particles around the image */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-particle-float opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-particle-float opacity-80" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-particle-float opacity-80" style={{animationDelay: '1s'}}></div>
            </div>
            
            
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
              Arun Thakur
            </h1>
            
            <div className="text-2xl lg:text-3xl font-semibold mb-4 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-cyan-300">I'm a </span>
              <span className="text-yellow-300 ml-2 min-h-[2rem] border-r-2 border-yellow-300 animate-pulse">
                {currentText}
                <span className="animate-blink">|</span>
              </span>
            </div>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Results-driven developer with <span className="text-cyan-400 font-semibold">6+ years</span> building scalable trading platforms, 
              crypto exchanges, and DeFi solutions. I focus on performance, maintainable architecture, and clean UI.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/arun-thakur-9ab3451a6" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                💼 LinkedIn
              </a>
              <button 
                onClick={() => {
                  const email = 'rajput.arun517@gmail.com';
                  const subject = 'Portfolio Inquiry';
                  const body = 'Hi Arun, I came across your portfolio and would like to discuss...';
                  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  
                  // Try to open mailto link
                  window.location.href = mailtoLink;
                  
                  // Fallback: copy email to clipboard
                  navigator.clipboard.writeText(email).then(() => {
                    alert('Email copied to clipboard: ' + email);
                  }).catch(() => {
                    alert('Email: ' + email);
                  });
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                title="Click to email: rajput.arun517@gmail.com"
              >
                📧 Email
              </button>
              <button 
                onClick={() => {
                  // Open resume with auto-download query param
                  window.open('/Arun_Thakur_Advanced_Resume.html?download=1', '_blank');
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                📄 Resume
              </button>
            </div>
          </div>
        </div>

        {/* Tech stack preview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {['React.js', 'Angular', 'Node.js', 'TypeScript'].map((tech, index) => (
            <div 
              key={tech}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-2xl mb-2">
                {tech === 'React.js' && '⚛️'}
                {tech === 'Angular' && '🅰️'}
                {tech === 'Node.js' && '🟢'}
                {tech === 'TypeScript' && '🔷'}
              </div>
              <div className="text-sm font-semibold">{tech}</div>
            </div>
          ))}
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Completed' },
            { number: '6+', label: 'Crypto Exchanges' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
