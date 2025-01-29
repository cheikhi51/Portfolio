import React from 'react'

function Skills() {
  return (
    <div className='skills-container ' id='skills'>
        <h1 className='text-white flex justify-center text-5xl my-15 skills-section-title'>Skills</h1>
        <div className="flex justify-evenly items-center flex-row flex-wrap gap-10">
        <div className='skill-card w-30 h-30'>
            <img src='src/html-5-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Html</h4>
        </div>
        <div className='skill-card w-30 h-30'>
            <img src='src/css-3-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>CSS</h4>
        </div>
        <div className='skill-card w-30 h-30'>
            <img src='src/javascript-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Javascript</h4>
        </div>
        <div className='skill-card w-30 h-30'>
            <img src='src/spring-boot-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Spring boot</h4>
        </div>
        <div className='skill-card w-30 h-30'>
            <img src='src/react-svgrepo-com.svg' className='w-10 h-10'/>
            <h4 className='font-medium'>React</h4>
        </div>
        <div className='skill-card w-30 h-30'>
            <img src='src/sql-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Sql</h4>
        </div>
        <div className='skill-card w-30 h-30 '>
            <img src='src/php-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>PHP</h4>
        </div>
        <div className='skill-card w-30 h-30 '>
            <img src='src/python-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Python</h4>
        </div>
        <div className='skill-card w-30 h-30 '>
            <img src='src/java-4-logo-svgrepo-com.svg' className=' w-10 h-10'/>
            <h4 className='font-medium'>Java</h4>
        </div>
        </div>
    </div>
  )
}

export default Skills
