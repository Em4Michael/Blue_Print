
import './App.css';

import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Products from './component/Products';
import Cavemen from './component/Cavemen';
import Culture from './component/Culture';
import {SliderData} from './component/SliderData'
import Contact from './component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage.js';

function App() {
  return (
    <div className="App">
      <Router>
      
        
        <Home/>
       <AboutUs/>
       <Products/>
       <Cavemen/> 
        <Culture slides={SliderData}/>
       <Contact/> 
       
      </Router>
    
    </div>
  );
}

export default App;
