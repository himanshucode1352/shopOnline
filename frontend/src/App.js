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
import DashBoard from './screens/DashBoard';

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
 <Route exact path='/dashboard' element={< DashBoard />}></Route> 
 </Routes>
 </BrowserRouter>
  );
}

export default App;
