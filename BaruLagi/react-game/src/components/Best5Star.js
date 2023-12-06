import { Container, Row, Col, Card, Image } from "react-bootstrap";
import nahida from '../asset/Best 5 Star Char/Nahida.jpeg';
import kazuha from '../asset/Best 5 Star Char/Kaedehara Kazuha.jpeg';
import kokomi from '../asset/Best 5 Star Char/Sangonomiya Kokomi.jpeg';
import ayaka from '../asset/Best 5 Star Char/Ayaka.jpeg';
import raiden from '../asset/Best 5 Star Char/Raiden Shogun.jpeg';

const Best5Star = () => {
    return (
        <>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="Best5star">BEST 5 STAR CHARACTER</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={nahida} alt="nahida" className="images" />
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
                            <Image src={kazuha} alt="kazuha" className="images" />
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
                            <Image src={ayaka} alt="ayaka" className="images" />
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
                            <Image src={raiden} alt="kokomi" className="images" />
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
                            <Image src={kokomi} alt="kokomi" className="images" />
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

export default Best5Star();