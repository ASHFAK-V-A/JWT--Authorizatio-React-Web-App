import React from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from "react-router-dom";
import {actionCreators} from '../../../state/index'
function Home() {

  const auth = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { removeToken } = bindActionCreators(actionCreators, dispatch);

let userNmae

if(auth.token.name){
userNmae="Logout"
}else{
  userNmae="login"
}


const LogoutHandler= () => {
  const data = {
    token: auth.token,
    id: auth.id
  }
  console.log(data);
  removeToken(data);
  navigate('/login');
}
useEffect(() => {
  if (auth.token.token === '') {
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
              <li><span onClick={LogoutHandler} className="glyphicon glyphicon-log-in text-white">{`${userNmae}`}</span></li>
          
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
