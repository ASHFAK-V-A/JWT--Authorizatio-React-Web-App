import React from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { removetoken } from '../../../Redux/token/token';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



function Home() {

const Isauth= useSelector((state)=>state.token)
console.log(Isauth);

let IsUser="Logout"

  const navigate = useNavigate();
  const dispatch=useDispatch()




const LogoutHandler= () => {


  let data ={
    token:null,
    id:null,
    email:null,
    name:null 

     
  }

dispatch(removetoken(data))
  navigate('/login');
}
useEffect(() => {
  if (Isauth.token.token ===null) {
    navigate('/login');
  }

}, [])

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
              <li><span onClick={LogoutHandler} className="glyphicon glyphicon-log-in text-white">{`${IsUser}`}</span></li>
          
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
