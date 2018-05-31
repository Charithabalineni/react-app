import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

class Nav extends Component{
    render(){
        return(
            <div className="nav">
             <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="mainNav">
      <div class="container">
        <Link class="navbar-brand" id="title" to="/">React Project</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <Link class="nav-link text-white" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

            </div>
        )
    }
}

export default Nav;