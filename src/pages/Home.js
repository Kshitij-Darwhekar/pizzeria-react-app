import React from 'react'
import {Link} from 'react-router-dom'
import bannerimg from '../assets/pizza.jpeg'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bannerimg})`  }}>
        <div className='headerContainer' >
          <h1 >Kshitij's Pizzaria</h1>
          <p>The best pizza in town</p>
          <Link to='/menu'>
          <button>Order Now</button>
          </Link>
        </div>
    </div>
  )
}

export default Home