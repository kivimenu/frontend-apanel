import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//components
// import Navbar from './components/Navbar';

//pages
import home from './pages/home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
