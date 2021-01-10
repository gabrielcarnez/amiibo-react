import React from "react";
import PropTypes from "prop-types";
import LinkList from "../LinkList/LinkList";
import "./Footer.css";

const Footer = ({ madeWith, personal, description, name }) => (
  <footer className="Footer w3-container w3-padding-32 w3-dark-grey">
    <div className="w3-row-padding">
      <div className="w3-third">
        <h3>{name}</h3>
        <small dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="w3-third">
        <LinkList title="Made with..." list={madeWith} />
      </div>

      <div className="w3-third">
        <LinkList title="Contact:" list={personal} />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  madeWith: PropTypes.array,
  personal: PropTypes.array,
  description: PropTypes.string,
  name: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
