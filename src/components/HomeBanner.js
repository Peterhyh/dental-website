import { Container, Row, Col, Button } from 'reactstrap';
import { Parallax } from 'react-parallax';
import Banner from '../app/assets/img/banner.jpg';

const HomeBanner = () => {
    return (
        <>
            <Parallax strength={400} bgImage={Banner}>
                <div className='content d-flex justify-content-center align-items-center'>
                    <div>
                        <h1>Dental Brand</h1>
                        <h3>dental and orthodontics</h3>
                        <button className='appointment-button mt-5 rounded-pill p-2' href='/'>Click here to book your appointment today!</button>
                    </div>
                </div>
            </Parallax>
            <Container>
                <Row>
                    <Col>
                        <p>SECTION</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>SECTION</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>SECTION</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>SECTION</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
};

export default HomeBanner;