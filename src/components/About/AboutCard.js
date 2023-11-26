import React from "react";
import Card from "react-bootstrap/Card";
import { ImRedo } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Vitaliy Sviridyuk </span>
            from <span className="red"> Rochester, Ny.</span>
            <br />
            I am currently employed a third year Software engineering student at RIT.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImRedo /> Playing Games
            </li>
            <li className="about-activity">
              <ImRedo /> 3d Modeling
            </li>
            <li className="about-activity">
              <ImRedo /> Hiking
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
