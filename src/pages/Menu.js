import React from 'react'
import  {MenuList} from '../helpers/MenuList'
import  MenuItem  from '../components/MenuItem'
import '../styles/Menu.css'


function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Menu</h1>
        <div className='menuList'>
        {
            MenuList.map((menuItem, key) => {
                return (
                    <MenuItem 
                    key={key}
                    img={menuItem.img} 
                    name ={menuItem.name} 
                    price={menuItem.price} 
                    category={menuItem.category}/>
                );
            })
        }

        </div>
    </div>
  )
}

export default Menu