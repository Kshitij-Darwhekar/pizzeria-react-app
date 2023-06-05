import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedinIcon />
        </div>
        <p>&copy; 2023 Kshitij's Pizzaria</p>
    </div>
  )
}

export default Footer