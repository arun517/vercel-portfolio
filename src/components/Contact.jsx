import React, { useState } from 'react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('rajput.arun517@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <section className="mb-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg">Ready to build something amazing together?</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Mohali, Punjab · India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a href="tel:+917876526026" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    +91-7876526026
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  📧
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Email</h4>
                  <div className="flex items-center gap-2">
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
                      className="text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer bg-transparent border-none text-left"
                      title="Click to open email client"
                    >
                      rajput.arun517@gmail.com
                    </button>
                    <button
                      onClick={copyEmailToClipboard}
                      className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded hover:bg-cyan-500/30 transition-colors"
                      title="Copy email to clipboard"
                    >
                      {emailCopied ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  💼
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/arun-thakur-9ab3451a6" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    linkedin.com/in/arun-thakur-9ab3451a6
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</div>
          <p className="text-gray-300 mb-6">Let's discuss how we can bring your ideas to life with cutting-edge technology</p>
          <div className="flex flex-wrap justify-center gap-4">
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
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Start a Conversation
            </button>
            <a 
              href="https://www.linkedin.com/in/arun-thakur-9ab3451a6" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
