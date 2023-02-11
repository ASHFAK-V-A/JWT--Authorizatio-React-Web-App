import React from 'react'

import Login from '../user/login/login'
import Signup from '../user/signup/signup';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from '../user/home/home';

function UserComponets() {
  return (
    <div>
      <BrowserRouter>
<Routes>
 <Route exact  path="/"  element={<Login/>}></Route>
 <Route path="/signup" element={<Signup />}></Route>
 <Route path="/home" element={<Home/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default UserComponets
