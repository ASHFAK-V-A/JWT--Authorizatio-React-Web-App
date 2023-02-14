
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from '../../../axios/axios.js'

function UserManagment() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const auth = useSelector(state => state);

console.log(users);

if(auth.token.email){
  console.log('authenticated');

}
useEffect(() => {
  if (auth.token.token === '') {
    navigate('/admin');
  }else{
 axios.get('/admin/getUser').then((respose)=>{
setUsers(respose.data.AllUsers)

    })


  }
}, [])






  return (
    <div>
<NavBar/>
<div className="container "style={{marginTop:100}}>
  <div className="col-4 d-flex m-auto">
<input type="text" id="exampleForm2" className="form-control" autoFocus placeholder='Serach....'/><button className='btn btn-primary'>Search</button>  
  </div>
<button className='btn btn-info float-end mt-5'>Add User</button>
<table className="table "style={{marginTop:110}}>
  <thead className="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">id</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {users.map((obj,index)=>{

return(
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      <td>{obj._id}</td>
      <td><button className='btn btn-primary'>Edit</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
 
   
  </tbody>
)
    })}
</table>
</div>
    </div>
  )
}

export default UserManagment
