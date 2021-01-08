import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';

const Row = (props) => (
  <div className="Row" data-testid="Row">
    {props.children}
  </div>
);

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
