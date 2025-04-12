import React from 'react'

const Interest = () => {

    const itInterests = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Cybersecurity', icon: '🔒' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'DevOps', icon: '🔄' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Game Development', icon: '🎮' },
    { name: 'UI/UX Design', icon: '🎨' }
  ];
  return (
    <div className="interest-container p-8" id='interest'>
        <h1 className="text-5xl flex justify-center text-white interest-section-title fade-in-element mb-15">
          Interests
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {itInterests.map((interest, index) => (
            <div 
              key={index}
              className="interest-item bg-transparent rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-80 slide-in-right-element"
            >
              <div className="text-4xl mb-3">{interest.icon}</div>
              <h3 className="text-xl text-white font-medium">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Interest
