import React from 'react';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import RegisterPage from './Pages/RegisterPage';
function App() {
  return (
 <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
 </BrowserRouter>
  );
   
  

}


export default App;