import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#010101"}}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">WoreNu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-light active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link text-light active" to="/outfit">Outfits</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link text-light active" to="#">About Us</NavLink>
                {/* <a className="nav-link text-light" href="#">About Us</a> */}
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar