import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bennet from '../asset/Best 4 Star Char/Bennet.jpeg';
import diona from '../asset/Best 4 Star Char/Diona.jpeg';
import sucrose from '../asset/Best 4 Star Char/Sucrose.jpeg';
import xiangling from '../asset/Best 4 Star Char/Xiangling.jpeg';
import xingqiu from '../asset/Best 4 Star Char/Xingqiu.jpeg';

import React from 'react'

const Best4Star = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="best4star">BEST 4 STAR CHARACTER</h1>
        <br />
        <Row>
            <Col md={4}>
                <Card className="gameImage">
                    <Image src={bennet} alt="bennet" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-10 text-white">
                            <Card.Title className="text-center">Bennet</Card.Title>
                            <Card.Text className="text-center">A pyro character</Card.Text>
                        </div>
                    </div>
                </Card>
                <br />
            </Col>
            <Col md={4}>
                <Card className="gameImage">
                    <Image src={diona} alt="diona" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-10 text-white">
                            <Card.Title className="text-center">Diona</Card.Title>
                            <Card.Text className="text-center">A cryo character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="gameImage">
                    <Image src={sucrose} alt="sucrose" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-10 text-white">
                            <Card.Title className="text-center">Sucrose</Card.Title>
                            <Card.Text className="text-center">An anemo character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="gameImage">
                    <Image src={xiangling} alt="xiangling" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Xiangling</Card.Title>
                            <Card.Text className="text-center">A pyro character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="gameImage">
                    <Image src={xingqiu} alt="xingqiu" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Xingqiu</Card.Title>
                            <Card.Text className="text-center">A hydro character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default Best4Star
