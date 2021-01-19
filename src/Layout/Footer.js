import React from "react";
import './head_foo.css';
import '../index.css';

function Footer() {
    return (
        <div className="footer">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
            
            
            <h2>Follow us</h2>
            <div className="f_icons">
            <i class="fab fa-discord fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>  
            </div>
            <ul>
      <li><a href="/" id="a">Contact</a></li>
      <li><a href="/" id="b">Judges</a></li>
      <li><a href="/" id="c">Prizes</a></li>
      <li><a href="/" id="c">Teams</a></li>
      <div className="underline"></div>        
      </ul>

      <h4>copyright bla bla All right reserved bla bla bla bla bla bla bla bla </h4>
        </div>


    );
}

export default Footer;