import logo from './logo.svg';
import './App.css';
import Layout from '../src/components/Layout'

import HomePage from './screens/homePage';
import Register from './screens/Register';
import About from './screens/About';
import Contact from './screens/Contact';
import Policy from './screens/Policy';
import Login from './screens/Login';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={< HomePage />}></Route> 
 <Route exact path='/register' element={< Register />}></Route> 
 <Route exact path='/about' element={< About />}></Route> 
 <Route exact path='/contact' element={< Contact />}></Route> 
 <Route exact path='/login' element={< Login />}></Route> 
 <Route exact path='/policy' element={< Policy />}></Route> 
 </Routes>
 </BrowserRouter>
  );
}

export default App;
