import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import axios from 'axios';






function Login() {


const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

  const onChangeHandle = (e) => {

};

const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('/login',{
    email,
    password
  }).then((response)=>{
console.log(response);
  })
}
  return (
<section className="vh-100">
  <form onSubmit={handleSubmit}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">login</h3>

            <div className="form-outline mb-4">
            <label className="form-label float-start" for="typeEmailX-2">Email</label>
              <input type="email"
               id="typeEmailX-2" 
               className="form-control form-control-lg" 
                 onChange={onChangeHandle}
                 value={email}/>
            </div>

            <div className="form-outline mb-4">
            <label className="form-label float-start" for="typePasswordX-2">Password</label>
              <input
               type="password" 
               id="typePasswordX-2"
              className="form-control form-control-lg"
              onChange={onChangeHandle}
              value={password}
                 />
            </div>

        
            <div className="form-check d-flex justify-content-start mb-4">
              <input
               className="form-check-input"
                type="checkbox"
                id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> <span className='ms-2'> Remember password  </span></label>
            </div>

            <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">Login</button>

    <p >Don't have an account?<Link className='ms-1' to='/signup'>Click Here</Link> </p>
      

          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>
  )
}

export default Login
