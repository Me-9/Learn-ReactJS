import { Container, Card, Col, Row, Image } from "react-bootstrap";
import bennet from '../asset/Best 4 Star Char/Bennet.jpeg';
import diona from '../asset/Best 4 Star Char/Diona.jpeg';
import sucrose from '../asset/Best 4 Star Char/Sucrose.jpeg';
import xiangling from '../asset/Best 4 Star Char/Xiangling.jpeg';
import xingqiu from '../asset/Best 4 Star Char/Xingqiu.jpeg';

const Best4Star = () => {
    return (
        <>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="Best4star">BEST 4 STAR CHARACTER</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={bennet} alt="bennet" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Title className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Title>
                                    <Card.Title className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Title>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={diona} alt="diona" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Title className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Title>
                                    <Card.Title className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Title>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={sucrose} alt="sucrose" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Title className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Title>
                                    <Card.Title className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Title>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={xiangling} alt="xiangling" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Title className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Title>
                                    <Card.Title className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Title>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={xingqiu} alt="xingqiu" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Title className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Title>
                                    <Card.Title className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Title>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Best4Star();