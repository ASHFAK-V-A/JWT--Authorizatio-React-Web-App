import React from 'react'

function home() {
  return (
    <div>
           <header>
      <Navbar className="navbar navbar-inverse bg-info">
  <div className="container-fluid">
    <div className="navbar-header">
      <Nav className="navbar-brand" href="#">WebSiteName</Nav>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <Button>
              <li><a href="#"><span className="glyphicon glyphicon-log-in text-white">Login </span> </a></li>
        </Button>
    </ul>
  </div>
</Navbar>
      </header>


    </div>
  )
}

export default home
