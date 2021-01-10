import React from "react";
import LinkList from "../LinkList/LinkList";
import "./Footer.css";

const Footer = () => {
  const contact = [
    { text: "Gabriel carnez", link: "https://www.gabrielcarnez.com.ar/" },
    { text: "Linkeding", link: "www.linkedin.com/in/gabriel-david-carnez" },
    { text: "Github", link: "https://github.com/gabrielcarnez/" },
  ];
  const madeWith = [
    { text: "Amiiboapi", link: "https://www.amiiboapi.com/" },
    { text: "W3css", link: "https://www.w3schools.com/w3css/" },
    { text: "React and diferent libraries)", link: "https://reactjs.org/" },
  ];

  return (
    <footer className="Footer w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>Amigo Smile</h3>
          <small>
            The objetive of this app is apply new technologie, learn sometihing
            new and practice, nothing more. <br />
            You can find the code of this project in this{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gabrielcarnez/amiibo-react"
            >
              link
            </a>
            , you can make suggetions o propous new functionalitis ( why not? ).
            <br />
            Thanks!
          </small>
        </div>

        <div className="w3-third">
          <LinkList title="Made with..." list={madeWith} />
        </div>

        <div className="w3-third">
          <h3></h3>
          <LinkList title="Contact:" list={contact} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
