import React from "react";
import './head_foo.css';
import '../index.css';

function Header () {
    return (<div>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <nav className="header">
          
      <ul id="head">
          
      <img  id="logo" alt="dsc_logo"/>
      <li><a href="/" id="a">Contact</a></li>
      <li><a href="/" id="b">Judges</a></li>
      <li><a href="/" id="c">Prizes</a></li>
      <li><a href="/" id="c">Teams</a></li>
      </ul>
      
      </nav>
      
      </div>

    );
}

export default Header;

