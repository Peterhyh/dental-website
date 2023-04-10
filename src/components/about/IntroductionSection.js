import { Container, Row, Col } from 'reactstrap';
import Building from '../../app/assets/img/building.jpg'

const IntroductionSection = () => {
    return (
        <Container >
            <Row >
                <Col className='mt-5 p-3'>
                    <br />
                    <br />
                    <h1>About Us</h1>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col>

                </Col>
            </Row>
            <Row className='mb-5 d-flex align-items-center'>
                <Col md='7'>
                    <img className='about-building-pic' src={Building} alt='dental building' />
                </Col>
                <Col md='5'>
                    <h3 >SweetlyDental</h3>
                    <hr class='about-title-underline' />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in.</p>
                </Col>
            </Row>
            <br />
        </Container>
    )
};

export default IntroductionSection;