
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from '../../../axios/axios.js'





function UserManagment() {
  const [users, setUsers] = useState([]);
  const [search,setSearch]=useState('')
  const navigate = useNavigate();
  const auth = useSelector(state => state);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [BlockUsered,setBlockUser]=useState(false)
 const [UnBlockUsers,setUnblockUsers]=useState()


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

const onChangeHandler =(e)=>{
const serchdata= e.target.value
setSearch(serchdata)
if (serchdata !== "") {

  const newPacientes = users.filter((value) =>
value.name.includes(search)

  );

  setFilteredUsers(newPacientes);

}

}


const BlockUser=(async(userId)=>{
  await axios.post(`admin/blockuser/${userId}`).then((response)=>{
 const blockUser=response.data
 console.log('user block',blockUser);
  setBlockUser(blockUser)
  axios.get('/admin/getUser').then((respose)=>{
    setUsers(respose.data.AllUsers)
        })

  })


})

const unBlockUser=(async(userId)=>{
await axios.post(`admin/unblockuser/${userId}`).then((response)=>{
 
const unblock=response.data
console.log('user unblock',unblock);
setUnblockUsers(unblock)

axios.get('/admin/getUser').then((respose)=>{
  setUsers(respose.data.AllUsers)
      })

})
})






  return (
    <div>
<NavBar/>
<div className="container "style={{marginTop:100}}>
  <div className="col-4 d-flex m-auto">

<input type="text"
 id="exampleForm2" 
 className="form-control"
  autoFocus 
  onChange={onChangeHandler}
  placeholder='Serach....'/>
  <button className='btn btn-primary'>Search</button>  
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
  
       { search === "" &&  users.map((obj,index) => {
return(
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      <td>{obj._id}</td>

      <td><button className='btn btn-primary'>Edit</button></td>
      {obj.isBlocked ===true ?
      
      (
        <td><button onClick={() => unBlockUser(obj._id)} className="btn btn-danger" >unblock</button></td>
        
      ):(
        <td><button onClick={() => BlockUser(obj._id)} className="btn btn-danger" >Block</button></td>
      )
      }
    

   
     
    </tr>
 
   
  </tbody>
)
       
    })}
    
  
    { search !== "" &&  filteredUsers.map((obj,index) => {
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
