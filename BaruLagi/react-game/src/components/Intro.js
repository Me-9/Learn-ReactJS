import { Container, Row, Col, Button } from "react-bootstrap";
import React from 'react';

export const Intro = () => {
  return (
    <div>
      <div className="intro">
            <Container>
                <Row>
                    <Col>
                        <div className="title">ON TARGET</div>
                        <div className="title">MISSION COMPLETE</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark">See All List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}