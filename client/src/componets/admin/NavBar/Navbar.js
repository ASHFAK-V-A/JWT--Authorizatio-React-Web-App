import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeToken } from '../../../state/Action';

function Adminhome() {
  
  const auth = useSelector(state => state);
  const navigate = useNavigate();


  let LoginorLogout

  if(auth.token.email){
    LoginorLogout="Logout"
  }else{
    LoginorLogout="login"
  }
  

  const LogoutHandler= () => {
    const data = {
      token: auth.token,
      id: auth.id
    }
    removeToken(data);
    navigate('/admin');
  }


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
              <li><span onClick={LogoutHandler} className="glyphicon glyphicon-log-in text-white">{`${LoginorLogout}`}</span></li>
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
