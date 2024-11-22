// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'

import {Route, Routes} from 'react-router-dom'

 

import SideNav from './components/SideNav/SideNav'
import TopNav from './components/Topnav/TopNav'

// import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';
 import Dashboard from './pages/dashboard/dashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true


function App() {
  return (
   

      <div className='app-wrapper'>    
   <Toaster position='top-center' toastOptions={{duration: 2000}}/>
        

         
         <div className='right'>
        
         <Routes>

         
      
         <Route path='/' element={<Home/>}/>
       
          <Route path='/dashboard' element={<Dashboard/>}/>
    
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
       
         
          


         </Routes>
    

         </div>
         
         
     
      </div>
     
  </UserContextProvider>
  )
}

export default App
