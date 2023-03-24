import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

const convert = require("number-to-words");

function AboutCard() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Dear visitors of my{" "}
            <span className="purple"> personal website.</span> I am{" "}
            <span className="purple">Jakob Felix Eugen Rössner </span>
            from <span className="purple"> Berlin, Germany.</span>
            <br />I am a student at the{" "}
            <a href="https://fsg-kw.de/" className="purple">Friedrich-Schiller-Gymnasium.</a>
            <br />
            <br />I am <span className="purple">
              {year - 2009} years old.
            </span>{" "}
            I have a wide range of interests, what you can see from the other
            activities that I love to do, apart from coding!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Hockey
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Piano and Organ
            </li>
            <li className="about-activity">
              <ImPointRight /> Visiting museums and reading books on topics
              related to social science
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Since I got my first computer for my enrollment in elementary
            school, I've been fascinated by figuring out what's behind the
            applications I use. That's why I started programming{" "}
            {convert.toWords(year - 2019)} years ago and have been increasingly
            passionate about it ever since and I have at least learnt something,
            I think… 🤷‍♂️
            <br />
            As a Zoomer, I am very interested in software engineering, as I
            belong to a generation that grows up with these technologies and
            engages with them every day.
            <br />
            <br />
            My preferences are by classics like
            <i>
              <b className="purple"> Typescript, Kotlin and C#. </b>
            </i>
            <br /> But I'm always open to make new experiences.
            <br />
            <br />
            My field of interests are building new
            <i>
              <b className="purple"> Web Technologies and Products </b> and also
              in areas related to <b className="purple"> Game Development. </b>
              But I am also interested in{" "}
              <b className="purple"> Mobile Development </b> with languages like{" "}
              <b className="purple"> Kotlin and Java.</b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js.</b>
            </i>
            <br />
            <br />
            Also I'm learning things in Game Development with{" "}
            <b className="purple"> C#. </b>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">My motto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
