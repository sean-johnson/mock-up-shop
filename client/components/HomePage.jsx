import React from 'react'

export default() => {
  return (
    <div className="home-container">
      <div className="left-third-container">
        <div className="left-third-content">
          <div className="logo-div">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="rgba(0,0,0,0.2)"/>
            </svg>
          </div>
          <div className="login-div">
            <a href="" className="login">Login / Sign Up</a>
          </div>
          <div className="nav-div">
            <ul>
              <li>
                <a href="" className="nav">About</a>
              </li>
              <li>
                <a href="" className="nav">How to use</a>
              </li>
              <li>
                <a href="" className="nav">Contact</a>
              </li>
            </ul>
          </div>
          <div className="category-div">
            <ul>
              <li>
                <a href="" className="category">All</a>
              </li>
              <li>
                <a href="" className="category">Boards</a>
              </li>
              <li>
                <a href="" className="category">Hats</a>
              </li>
              <li>
                <a href="" className="category">Jackets</a>
              </li>
              <li>
                <a href="" className="category">T-Shirts</a>
              </li>
            </ul>
          </div>
          <div className="cart-div"></div>
          <div className="terms-conditions">
            <p>The Mock Up Shop© All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div className="right-two-third-container">
        <div id="items-container">
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
          <div className="item-container"></div>
        </div>
      </div>
    </div>
  )
}
