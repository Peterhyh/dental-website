import { Container, Row, Col } from 'reactstrap';
import James from '../../app/assets/img/james.jpg';
import Mark from '../../app/assets/img/mark.jpg';
import Simon from '../../app/assets/img/simon.jpg';


const DoctorSection = () => {
    return (
        <Container>
            <Row>
                <Col className='pt-5'>
                    <h1 className='doctor-title'>Meet our Doctors:</h1>
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col className='james-title'>
                    <h2>Dentist, Dr. James Smith, DDS</h2>
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col md='8'>
                    <p className='james-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit. Aliquam maximus euismod feugiat. Aliquam erat volutpat. In rutrum a lorem non varius. In felis risus, ultrices eu vulputate sed, ornare eget turpis. Sed aliquam lectus metus, et tincidunt nunc lacinia id. Maecenas gravida ante sagittis diam fringilla ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit. Aliquam maximus euismod feugiat. Aliquam erat volutpat. In rutrum a lorem non varius. In felis risus, ultrices eu vulputate sed, ornare eget turpis. Sed aliquam lectus metus, et tincidunt nunc lacinia id. Maecenas gravida ante sagittis diam fringilla ultricies.</p>
                </Col>
                <Col md='4'>
                    <img className='james-pic' src={James} alt='Doctor James' />
                </Col>
            </Row>

            <hr className='horizonal-rule' />

            <Row className='pt-3' >
                <Col className='mark-title'>
                    <h2>Dentist, Dr. Mark Wick, DDS</h2>
                </Col>
            </Row>
            <Row className='pt-3 row-content'>
                <Col md='8'>
                    <p className='mark-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit. Aliquam maximus euismod feugiat. Aliquam erat volutpat. In rutrum a lorem non varius. In felis risus, ultrices eu vulputate sed, ornare eget turpis. Sed aliquam lectus metus, et tincidunt nunc lacinia id. Maecenas gravida ante sagittis diam fringilla ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit.</p>
                </Col>
                <Col className='d-flex align-items-center p-5' md='4'>
                    <img className='mark-pic' src={Mark} alt='Doctor James' />
                </Col>
            </Row>

            <hr className='horizonal-rule' />

            <Row className='pt-3'>
                <Col className='simon-title'>
                    <h2>Dentist, Dr. Simon Rick, DDS</h2>
                </Col>
            </Row>
            <Row className='pt-3' divider>
                <Col md='8'>
                    <p className='simon-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit. Aliquam maximus euismod feugiat. Aliquam erat volutpat. In rutrum a lorem non varius. In felis risus, ultrices eu vulputate sed, ornare eget turpis. Sed aliquam lectus metus, et tincidunt nunc lacinia id. Maecenas gravida ante sagittis diam fringilla ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit. In rutrum a lorem non varius. In felis risus, ultrices eu vulputate sed, ornare eget turpis. Sed aliquam lectus metus, et tincidunt nunc lacinia id. Maecenas gravida ante sagittis diam fringilla ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ante malesuada, ullamcorper felis sed, egestas lectus. Pellentesque sed dolor id quam posuere accumsan at eu odio. Suspendisse potenti. Cras viverra odio vitae ligula vehicula faucibus. Aliquam laoreet pellentesque semper. Donec at ultricies urna, sed posuere lectus. Maecenas lobortis pulvinar orci, quis suscipit est pellentesque in. Donec non scelerisque velit.</p>
                </Col>
                <Col className='d-flex align-items-center p-5' md='4'>
                    <img className='simon-pic' src={Simon} alt='Doctor James' />
                </Col>
            </Row>
            <hr className='horizonal-rule' />
        </Container>
    )
};

export default DoctorSection;