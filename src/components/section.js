import React,{Component} from 'react';
import img1 from "../assets/images/mongodb.jpg";
import img2 from "../assets/images/reactjs.jpg";
import img3 from "../assets/images/nodejs.jpg";

class Section extends Component{
    render(){
        return(
            <div className="section">
            
            <section>
      <div class="container" data-aos="zoom-in" data-aos-duration="1500">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src={img1} alt="" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5 text-left" >
              <h2 class="display-4">Mongo DB</h2>
              <p>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container" data-aos="zoom-in" data-aos-duration="1500">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src={img2} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5 text-left">
              <h2 class="display-4">React js!</h2>
              <p>React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI .</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container" data-aos="zoom-in" data-aos-duration="1500">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src={img3} alt="" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5 text-left">
              <h2 class="display-4">Node js</h2>
              <p>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

            </div>
        );
    }
}
export default Section;