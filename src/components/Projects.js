import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import jee from "../assets/img/jee.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "JEE Notes App",
      description: "Flutter Develpoment",
      imgUrl: jee,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
