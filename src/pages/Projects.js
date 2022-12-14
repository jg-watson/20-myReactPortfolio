import React from "react";
import Readme from "../assets/images/readme_generator.png";
import API from "../assets/images/my_social_network_api.png";
import Generator from "../assets/images/team_profile_generator.png";
import Scheduler from "../assets/images/scheduler.png";
import Ecommerce from "../assets/images/e-commerce.png";
import Portfolio from "../assets/images/portfolio.png";

function Projects() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src= {Readme} alt="Professional ReadMe" 
          className="w-100 shadow-1-strong rounded mb-4"
         />
          <a href ="https://github.com/jg-watson/C9-Professional-ReadMe">ReadMe</a>
        

        <img
          src= {API}   alt="Social Network API"
          className="w-100 shadow-1-strong rounded mb-4"
        />

        <a href ="https://github.com/jg-watson/18-mySocialNetwork_Api">Social Network API</a>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src= {Generator} alt="Team Profile Generator"
          className="w-100 shadow-1-strong rounded mb-4"
          
        />
        <a href ="https://github.com/jg-watson/10-teamProfileGenerator">Team Profile Generator</a>

        <img
          src= {Scheduler} alt="Workday Scheduler"
          className="w-100 shadow-1-strong rounded mb-4"
        />
        <a href ="https://github.com/jg-watson/HW-5">Workday Scheduler</a>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src= {Ecommerce} alt="E-Commerce Project"
          className="w-100 shadow-1-strong rounded mb-4" 
        />
         <a href ="https://github.com/jg-watson/13_e-commerce">E-Commerce App</a>

        <img
          src= {Portfolio} alt="1st Portfolio"
          className="w-100 shadow-1-strong rounded mb-4"
        />
        <a href ="https://github.com/jg-watson/Challenge-2-Portfolio">Original Portfolio</a>
      </div>
    </div>
  );
}

export default Projects;
