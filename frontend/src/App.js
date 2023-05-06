import logo from './logo.svg';
import './App.css';
import Layout from '../src/components/Layout'
import HomePage from './screens/homePage';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={< HomePage />}></Route> 
 </Routes>
 </BrowserRouter>
  );
}

export default App;
