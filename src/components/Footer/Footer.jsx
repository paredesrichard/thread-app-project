import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="about">
        <h3>About Us:</h3>
        <p>
          Textile Hub for Refugees' Empowerment, Employment and Entrepreneurship
          Advancement in Denmark - a new model
        </p>
        <p>
          THREAD is a dynamic and innovative collaboration of diverse partners
          from business, design, education, research and refugee support
          agencies aiming to achieve life-changing results for women who are
          forging new lives in Denmark.
        </p>
        <p>
          Integration is a key problem for refugees and their host countries.
          This project seeks to help solve this problem by developing and
          testing a pioneering themed model of Empowerment, Employment and
          Entrepreneurship opportunities. The model offers a step-change
          programme to women refugees with differing levels of life experience
          and educational qualifications, which may be accessed according to
          their individual confidence and competence.
        </p>
        <p>The project is funded by Innovationsfonden.</p>
        <br />
      </div>

      <div id="contact">
        <br />
        <h3>Contact:</h3>
        <p>
          Jane Malcolm-Davies, Director
          <br />
          Centre for Textile Research
          <br />
          University of Copenhagen
          <br />
          Tel.: +45 26 20 22 09
          <br />
          E-mail: jane@jmdandco.com
        </p>

        <p>
          Egzona Haxha, Co-Director
          <br />
          Centre for Textile Research
          <br />
          University of Copenhagen
          <br />
          Tel.: +45 60 86 32 17
          <br />
          E-mail: egzona@hum.ku.dk
        </p>
        <br />
      </div>

      <div id="main-footer">
        <br />
        <h4>Developed by:</h4>
        <p>
          Group 1 for the Final Project Class at <br />
          Hack Your Future - Copenhagen
          <br />
          <a
            href="http://hackyourfuture.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://hackyourfuture.dk
          </a>
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
