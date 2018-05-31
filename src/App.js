import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Error from './components/error';
import ScrollToTop from './modules/scroll';




class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
      <div className="App">
      <Nav />
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/portfolio' component={Portfolio} />
         <Route exact path='/contact' component={Contact} />
         <Route exact path='**' component={Error} />
        </Switch>
      <Footer />
      </div>
      </ScrollToTop>
      </Router>
    );
  }
}


export default App;

