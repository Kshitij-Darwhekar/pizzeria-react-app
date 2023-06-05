import React from 'react'
import {Link} from 'react-router-dom'
import bannerimg from '../assets/pizza.jpeg'


function Home() {
  return (
    <div className='home'>
        <div className='headerContainer' style={{backgroundImage: `url(${bannerimg})`  }}>
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