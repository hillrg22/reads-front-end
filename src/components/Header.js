import React from 'react'
import booksLogo from '../books_img.jpeg';

const Header = (props) => {
  return(
    <div className = "header">

      <img className='logo' src={booksLogo}/>
      <h1 className = 'big'>BookStore</h1>
    </div>
  )
}







export default Header
