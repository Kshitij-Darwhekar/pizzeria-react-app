import React from 'react'


function MenuItem({img, name, price, category}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${img})`}}></div>
        <h1>{name}</h1>
        <p>₹{price}</p>
        {/* <h4>{category}</h4> */}
    </div>
  )
}



export default MenuItem