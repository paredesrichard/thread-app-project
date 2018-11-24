import React from 'react';
import './Homepage.css';
//import backgroundImage from '../../images/pexels1.jpeg';

const Homepage = () => (
  <div className="homepage-container font-weight-normal px-5">
    <h1 className="welcome-page text-white">Welcome to the Thread Online Platform Project</h1>
    <div className="container text-white">
      <h4 className="p-5">THREAD</h4>
      <h5 className="p-4">Textile Hub for Refugees' Empowerment, Employment and Entrepreneurship Advancement in Denmark - a new model</h5>
      <p className="text-center">
        THREAD is a dynamic and innovative collaboration of diverse partners
        from business, design, education, research and refugee support agencies
        aiming to achieve life-changing results for women who are forging new
        lives in Denmark.
      </p>
      <br />
      <p className="text-center">
        Integration is a key problem for refugees and their host countries. This
        project seeks to help solve this problem by developing and testing a
        pioneering themed model of Empowerment, Employment and Entrepreneurship
        opportunities. The model offers a step-change programme to women
        refugees with differing levels of life experience and educational
        qualifications, which may be accessed according to their individual
        confidence and competence.
      </p>
    </div>
  </div>
);

export default Homepage;
