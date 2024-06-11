import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Landing from './Landing'
import Signin from './Signin'
import Signup from './Signup'
import { useState } from "react"


const Security = () => {

    const [users,setusers] = useState(
        [
            {
                username:"Mady",
                password:"@123"
            }
        ]
    )

    return(
        <>
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signin users={users} setusers={setusers}></Signin>}></Route>
              <Route path='/signup' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
              <Route path='/landing' element={<Landing></Landing>}></Route>
              
            </Routes>
          </BrowserRouter>
        </>
    )
}
export default Security