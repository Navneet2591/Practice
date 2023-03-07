 
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Login from './Auth/Login';
import Dashboard from './Dashboard';

const Routers = () => { 

 const [isAuthrised, setisAuthrised] = useState(true); 

  useEffect(()=>{

  }, [])

  
  return (
    <Routes>    
        {
            !isAuthrised ? (
                <Route path='/login' element={<><h2>login</h2></>}> </Route>
          ):(   <Route exact={true} path='/' element={<Dashboard/>}> </Route>)
        } 
    </Routes>
  )
}

export default Routers