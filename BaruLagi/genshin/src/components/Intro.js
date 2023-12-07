import { Container, Row, Col, Button } from "react-bootstrap";

import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-black text-center d-flex justify-content-center align-items-center">
        <Row>
            <Col>
                <div className="title">ON TARGET</div>
                <div className="title">MISSION COMPLETE</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark">See All List</Button>
                </div>
                <br />
                <br />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
