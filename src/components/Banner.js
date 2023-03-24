import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} xl={7} md={6}>
            <span className="tagline">Hello There !</span>
            <h1>
              {"Hi i am Nikhil"}
              <span className="wrap">Maxeff</span>
            </h1>
            <p>lets see shal we ? . ok . hmm . mmhumm .</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
