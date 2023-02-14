import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
function Adminhome() {
  return (
    <div>
           <header>
      <Navbar className="navbar navbar-inverse bg-info">
  <div className="container-fluid">
    <div className="navbar-header">
      <Nav className="navbar-brand" href="#">Admin Panel</Nav>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <Button>
              <li><a href="#"><span className="glyphicon glyphicon-log-in text-white">Login </span> </a></li>
        </Button>
    </ul>
  </div>
</Navbar>
      </header>
<section>
  <div className="container mt-5  ">
<h1 className='text-center text-decoration-underline mb-5'>User Managment</h1>
  </div>
</section>

    </div>
  )
}

export default Adminhome
