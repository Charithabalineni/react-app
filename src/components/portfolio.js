import React,{Component}from 'react';
import './portfolio.css';

let porImg1,porImg2,porImg3,porImg4;

porImg1="http://files.inglishowie.com.s3-website-eu-west-1.amazonaws.com/images/sales/Image.png";
porImg2="https://format-com-cld-res.cloudinary.com/image/private/s--yKih5kcZ--/c_limit,g_center,h_65535,w_700/a_auto,fl_keep_iptc.progressive,q_95/v1/bd396056df591a252867ecc9499255ab/KAC_AITD_PostCard_6x4_web.jpg";
porImg3="http://think-eg.com/images/portfolio/Alsonbola3.png";
porImg4="https://www.conradferguson.com/site/conradferguson/assets/images/CFA_2013_web_portfolio12_700x476.jpg";

let img="http://thestudioweb.com/wp-content/uploads/2016/02/inner-banner-03.jpg";
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