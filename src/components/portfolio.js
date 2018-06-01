import React,{Component}from 'react';
import './portfolio.css';
import porImg1 from "../assets/images/p01.jpg";
import porImg2 from "../assets/images/p02.jpg";
import porImg3 from "../assets/images/p03.jpg";
import porImg4 from "../assets/images/p04.jpg";
import img from "../assets/images/portfolio.jpg";

class Portfolio extends Component{
    render(){
        return(
            <div>
                <img class="port-banner" src={img} data-aos="flip-up" data-aos-duration="900" />
                <br /><br /><br /><br />
                <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h1 className="h1" class="mb-5">Recent Projects</h1>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h1 class="text-large h1">Project 1</h1>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
              </span>
              <img class="img-fluid" src={porImg1} alt="" />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h1 className="h1">Project 2</h1>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
                             </span>
              <img class="img-fluid" src={porImg2} alt="" />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h1 className="h1">Project 3</h1>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
              </span>
              <img class="img-fluid" src={porImg3} alt="" />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#">
              <span class="caption">
                <span class="caption-content">
                  <h1 className="h1">Project 4</h1>
                  <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
              </span>
              <img class="img-fluid" src={porImg4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section><br /><br /><br /><br />
            </div>
        );
    }
}
export default Portfolio;