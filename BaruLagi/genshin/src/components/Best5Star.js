import { Container, Card, Col, Row, Image } from "react-bootstrap";
import ayaka from '../asset/Best 5 Star Char/Ayaka.jpeg';
import kazuha from '../asset/Best 5 Star Char/Kaedehara Kazuha.jpeg';
import nahida from '../asset/Best 5 Star Char/Nahida.jpeg';
import raiden from '../asset/Best 5 Star Char/Raiden Shogun.jpeg';
import kokomi from '../asset/Best 5 Star Char/Sangonomiya Kokomi.jpeg';

import React from 'react'

const Best5Star = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="best5star">BEST 5 STAR CHARACTER</h1>
        <br />
        <Row>
            <Col md={4}>
                <Card className='gameImage'>
                    <Image src={ayaka} alt="ayaka" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Ayaka</Card.Title>
                            <Card.Text className="text-center">A cryo character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='gameImage'>
                    <Image src={nahida} alt="nahida" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Nahida</Card.Title>
                            <Card.Text className="text-center">A dendro character</Card.Text>
                        </div>
                    </div>
                </Card>
                <br />
            </Col>
            <Col md={4}>
                <Card className='gameImage'>
                    <Image src={kazuha} alt="kazuha" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Kaedehara Kazuha</Card.Title>
                            <Card.Text className="text-center">An anemo character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='gameImage'>
                    <Image src={raiden} alt="raiden" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Raiden Shogun</Card.Title>
                            <Card.Text className="text-center">An electro character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='gameImage'>
                    <Image src={kokomi} alt="kokomi" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Sangonomiya Kokomi</Card.Title>
                            <Card.Text className="text-center">A hydro character</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Best5Star
