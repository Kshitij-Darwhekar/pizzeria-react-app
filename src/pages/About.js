import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'


function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage: `url(${MultiplePizzas})`}}>
        
      </div>

      <div className='aboutBottom'>
      <h1>About Us</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
      </div>

    </div>
  )
}

export default About