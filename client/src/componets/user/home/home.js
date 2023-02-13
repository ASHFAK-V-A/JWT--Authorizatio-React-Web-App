import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';

function Home() {

const auth=useSelector((state)=>state);


let userNmae

if(auth.token.name){
userNmae=auth.token.name
}else{
  userNmae="login"
}

  return (
    <div>

      <header>
      <Navbar className="navbar navbar-inverse bg-info">
  <div className="container-fluid">
    <div className="navbar-header">
      <Nav className="navbar-brand" >WebSiteName</Nav>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <Button>
              <li><a  ><span className="glyphicon glyphicon-log-in text-white">{`${userNmae}`}</span> </a></li>
        </Button>
    </ul>
  </div>
</Navbar>
      </header>


<section>

<div className="d-flex justify-content-center align-items-center" style={{height:500}}>
<h1 >Wohooo You are logined  🥳🥳</h1>

</div>

</section>

    </div>
  )
}

export default Home
