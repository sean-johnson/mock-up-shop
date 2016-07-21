import React from 'react'

export default() => {
  return (
    <div className="home-container">
      <div className="left-third-container">
        <div className="logo-container">
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
          </svg>
        </div>
        <div className="nav-container">
          <div className="nav-div">
            <a href="" className="nav">About</a>
            <a href="" className="nav">How to use</a>
            <a href="" className="nav">Contact</a>
          </div>
          <div className="category-div">
            <a href="" className="category">All</a>
            <a href="" className="category">Boards</a>
            <a href="" className="category">Hats</a>
            <a href="" className="category">Jackets</a>
            <a href="" className="category">T-Shirts</a>
          </div>
        </div>
        <div className="terms-conditions">
          <p>The Mock Up Shop© All Rights Reserved.</p>
        </div>
      </div>
      <div className="item-container"></div>
    </div>
  )
}
