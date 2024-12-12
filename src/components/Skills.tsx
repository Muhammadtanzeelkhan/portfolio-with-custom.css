import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'></div>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl'> Use latest course and success comes </h2>
            <p className='text-gray-500 pt-2'>
            I am offering a free course that will help you develop valuable skills and advance your knowledge. Whether you're looking to enhance your career or learn something new, this course provides the perfect opportunity. By participating, you'll gain hands-on experience and practical insights. Don't miss out on the chance to learn from experts and grow your abilities. Sign up today and take the first step towards a brighter future!
            </p>
        </div>
      <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'></div>
        <div className='space-y-2'></div>
        <h2 data-aos="zoom-in-up">typescript</h2>
        <h2 data-aos="zoom-in-up">html</h2>
        <h2 data-aos="zoom-in-up">CSS</h2>
      </div>
      <div className='space-Y-2'>
        <h2 data-aos="zoom-in-up">E COMMERCE</h2>
        <h2 data-aos="zoom-in-up">JAVASCRIPT</h2>
        <h2 data-aos="zoom-in-up">ARTIFICAL INTELLEGENCE</h2>
      </div>
    </div>
  )
}

export default Skills
