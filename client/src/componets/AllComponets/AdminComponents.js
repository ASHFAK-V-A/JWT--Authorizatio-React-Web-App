import React from 'react'
import Login from '../admin/login/login'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Landingpage from '../admin/UserMangment/UserManagment'

function AdminComponents() {
  return (
   
    <BrowserRouter>
<Routes>
<Route exact  path="/admin"  element={<Login/>}></Route>
<Route   path="/admin/home"  element={<Landingpage/>}></Route>

    </Routes>
    </BrowserRouter>

  )
}

export default AdminComponents
