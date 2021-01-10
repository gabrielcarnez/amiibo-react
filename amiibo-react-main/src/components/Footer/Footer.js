import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = () => (
  <footer class="w3-container w3-padding-32 w3-dark-grey">
    <div class="w3-row-padding">
      <div class="w3-third">
        <h3>FOOTER</h3>
      </div>

      <div class="w3-third">
        <h3>BLOG POSTS</h3>
        <ul class="w3-ul w3-hoverable">
          <li class="w3-padding-16">
            <img
              src="/w3images/workshop.jpg"
              class="w3-left w3-margin-right"
              
            />
            <span class="w3-large">Lorem</span>
            <span>Sed mattis nunc</span>
          </li>
          <li class="w3-padding-16">
            <img
              src="/w3images/gondol.jpg"
              class="w3-left w3-margin-right"
              
            />
            <span class="w3-large">Ipsum</span>
            <span>Praes tinci sed</span>
          </li>
        </ul>
      </div>

      <div class="w3-third">
        <h3>POPULAR TAGS</h3>
        <p>
          <span class="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">New York</span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">
            IKEA
          </span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">NORWAY</span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">
            Ideas
          </span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">
            News
          </span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">
            Sports
          </span>{" "}
          <span class="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
        </p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;