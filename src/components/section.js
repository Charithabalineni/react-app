import React,{Component} from 'react';

let img1,img2,img3;

img1 = "https://4.bp.blogspot.com/-hUtu9plQ7UI/WHSAWMTaE0I/AAAAAAAAAw4/yM8t3S63izsfZuDPhAQ0KajZJB1Ymsm6gCLcB/s700-c/mongodb.png ";
img2 = "https://static1.squarespace.com/static/55c8e052e4b01bd89f02a45e/563cf3b4e4b0cb0c3bcbb61f/564cc5aee4b0cbfa0c1d1f7c/1455921954347/?format=1000w";
img3 = "https://www.appeonix.com/photos/pages/what-is-node-js-featured-photo-1455714103.jpg";

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