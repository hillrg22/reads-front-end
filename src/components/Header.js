import React from 'react'
import booksLogo from '../books_img.jpeg';

const header = (props) => {
  return(
    <div className = "header">

      <img className='logo' src={booksLogo}/>
      <h1 className = 'big'>Galvanize Reads</h1>
    </div>
  )
}







export default header
