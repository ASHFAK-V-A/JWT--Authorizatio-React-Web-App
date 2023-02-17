import React,{useState} from 'react'
import Navbar from '../NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function Edituser({UserData}) {

let [NewName,setNewName]=useState('')


const HandleSubmit=(e)=>{
e.preventDefault()
}


console.log(NewName);
  return (
    <div>


        <div className="container"> 
              <form onSubmit={HandleSubmit}>
  <div class="row">
    <div class="col-6">
        <label className='mb-3'>Current Name</label>
      <input type="text"  value={UserData.name} className="form-control"  disabled="true"/>
    </div>
    <div class="col-6">
    <label  className='mb-3'>Enter New Name</label>
      <input type="text"
       className="form-control w-80"
        placeholder="Enter.."
         autoFocus="true"
         name='name'
         value={NewName}
         onChange={(e)=>setNewName(e.target.value)}
      
       />

    </div>
  </div>
  
  <button className='btn btn-primary float-end mt-5'>Submit</button>
 </form> 
 <button className='btn btn-danger float-end mt-5 me-3'>Cancel</button>
  </div>
  


    </div>
  )
}

export default Edituser
