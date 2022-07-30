import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <img 
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="troll-face-logo" 
        className="header--image"
      /> 
      <h2 className="header--title">Meme Generator</h2> 
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  )
}

export default Header