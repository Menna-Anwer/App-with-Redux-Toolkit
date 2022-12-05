import React from 'react'
import {NavLink} from "react-router-dom"

import "./Header.css"
const Header = () => {
  return (
    <div  className="header">
      <ul className="nav">
        <h1>CRUD APP</h1>
        <div className='links'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add </NavLink>
          </li>
          <li className="login">login</li>
        </div>
       
      </ul>
    </div>
  )
}

export default Header
