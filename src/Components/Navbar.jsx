import React from 'react'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="#">
    <img className='img-fluid logo' src='../Images/logo1.png'/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav text-uppercase">
      <li className="nav-item active">
        <a className="nav-link" href="#"><i class="bi bi-house-door-fill px-1"></i> Home</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="bi bi-chat-dots-fill px-1"></i> about us</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="bi bi-telephone-fill px-1"></i> contactus</a>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="bi bi-gear-wide-connected px-1"></i> Servicse
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">service1</a>
          <a className="dropdown-item" href="#">service2</a>
          {/* <div className="dropdown-divider"></div> */}
          <a className="dropdown-item" href="#">service3</a>
        </div>
      </li>
      <li className='nav-item'>
        <button className='btn button-primary'>Book Appointment</button>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar