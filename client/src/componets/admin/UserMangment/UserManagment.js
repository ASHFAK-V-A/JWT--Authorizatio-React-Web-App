import React from 'react'
import NavBar from '../NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
function adduser() {
  return (
    <div>
<NavBar/>
<div className="container "style={{marginTop:100}}>
  <div className="col-4 d-flex m-auto">
<input type="text" id="exampleForm2" class="form-control" autofocus="true" placeholder='Serach....'/><button className='btn btn-primary'>Search</button>  
  </div>
<button className='btn btn-info float-end mt-5'>Add User</button>
<table class="table  "style={{marginTop:110}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>fghfg</td>
      <td><button className='btn btn-primary'>Edit</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
 
   
  </tbody>
</table>
</div>
    </div>
  )
}

export default adduser
