import React,{Component} from 'react';
import './header.css';
import h01 from '../assets/images/h01.jpg';
import h02 from '../assets/images/h02.jpg';
import h03 from '../assets/images/h03.jpg';




let slideF = {
    backgroundImage: 'url('+h01+')'
};
let slideS = {
  backgroundImage: 'url('+h02+')'
};
let slideT = {
  backgroundImage: 'url('+h03+')'
};

class Header extends Component{
    render(){
        return(
            <div className="header">
             <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active" style={slideF}>
            <div class="carousel-caption d-none d-md-block" data-aos="fade-down">
              <h3>First Slide</h3>
              <p>This is a description for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" style={slideS}>
            <div class="carousel-caption d-none d-md-block">
              <h3>Second Slide</h3>
              <p>This is a description for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item" style={slideT}>
            <div class="carousel-caption d-none d-md-block">
              <h3>Third Slide</h3>
              <p>This is a description for the third slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
            </div>
        );
    }
}

export default Header;