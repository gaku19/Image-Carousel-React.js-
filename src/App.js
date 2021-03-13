import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
  return (
    <> 
      <Router>
      <Navbar /> 
      <ImageSlider slides={SliderData} />
      <Switch> 
        <Route path='/' exact component={Home} /> 
      </Switch>
      </Router>
    </>
  )
}


export default App;


