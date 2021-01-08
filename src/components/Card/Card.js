import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = () => (
  <div className="Card" data-testid="Card">
    <div class="w3-third w3-container w3-margin-bottom">
      <img width="100" src="https://e7.pngegg.com/pngimages/800/280/png-clipart-mario-mario.png" alt="Norway" class="w3-hover-opacity" />
      <div class="w3-container w3-white">
        <p><b>Lorem Ipsum</b></p>
        
      </div>
    </div>
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
