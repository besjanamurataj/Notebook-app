import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home';


function  App () {
  return (
      <div>
  <Router>
  <Home/>
    <Switch>
    
   
     <Route path='/home' exact component={Home} /> 
 
    </Switch>
   
  </Router> 
      </div>
    );
  }
  
  

export default App;