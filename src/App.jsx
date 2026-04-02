import React from 'react';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
//cpmponents
import NavbarLayout from './components/NavbarLayout';
//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import RegisterPage from './Pages/RegisterPage';
import ListingPage from './Pages/List';
function App() {
  return (
    <>
 <BrowserRouter>
 <NavbarLayout/>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/book/list' element={<ListingPage/>}/>
    </Routes>
 </BrowserRouter>
 </>
  );
   
  

}


export default App;