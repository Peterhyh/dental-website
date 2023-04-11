import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col>
                        <h5>Hours of Operation:</h5>
                        <p>Mon-Fri 8:00 a.m. - 5:00 p.m.</p>
                    </Col>
                    <Col>
                        <h5>Location:</h5>
                        <p>1234 Demo Ave. Suite #5 City, State, Zip</p>
                    </Col>
                    <Col>
                        <h5>Contact:</h5>
                        <p>{'Tel: (XXX) XXX-XXXX'}</p>
                        <p>{'Fax: (XXX) XXX-XXXX'}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;