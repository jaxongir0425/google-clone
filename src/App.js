import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from "./SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
      
        {/* <h1>Lets build Google Clone with Jaxongir</h1> 
        {/* Home (the one with the search on) */}
        {/* Search Page (The result Page)  */} 
      
    </div>
  );
}

export default App;
