import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
function App() {
  return (
 <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
 </BrowserRouter>
  );
   
  

}


export default App;