import { Parallax } from 'react-parallax';
import RootCanals from '../../app/assets/img/rootcanal.png';
import Cosmetic from '../../app/assets/img/cosmetic.png';
import Implant from '../../app/assets/img/implant.png';
import Restorations from '../../app/assets/img/restorations.png';
import Cleaning from '../../app/assets/img/cleaning.png';
import Veneers from '../../app/assets/img/veneers.png';
import Pattern from '../../app/assets/img/pattern.png'
import { Container, Row, Col } from 'reactstrap';


const ServicesSection = () => {


    return (
        <>
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>Our Services</h1>
                <br />
            </div>

            <Parallax className='mb-5' strength={500} bgImage={Pattern}>
                <div className='services-container d-flex align-items-center'>
                    <Container className='m-5'>
                        <Row>
                            <Col className='col-md-4'>
                                <button class='services-buttons' >
                                    <img src={Veneers} alt='Venners icon' />
                                    <label>Cosmetic: Veneers</label>
                                </button>
                            </Col>
                            <Col className='col-md-4'>
                                <button class='services-buttons'>
                                    <img src={RootCanals} alt='Root Canal icon' />
                                    <label>Root Canals</label>
                                </button>
                            </Col>
                            <Col className='col-md-4'>
                                <button class='services-buttons'>
                                    <img src={Implant} alt='Implant icon' />
                                    <label>Medical Implants</label>
                                </button>
                            </Col>
                            <Col className='col-md-4'>
                                <button class='services-buttons'>
                                    <img src={Restorations} alt='Restoration icon' />
                                    <label>Restoration</label>
                                </button>
                            </Col>
                            <Col className='col-md-4'>
                                <button class='services-buttons'>
                                    <img src={Cleaning} alt='Cleaning icon' />
                                    <label>{' '}Cleaning/Checkups{' '}</label>
                                </button>
                            </Col>
                            <Col className='col-md-4'>
                                <button class='services-buttons'>
                                    <img src={Cosmetic} alt='Cosmetic icon' />
                                    <label>General Cosmetic</label>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Parallax>


            <br />
        </>
    )
};

export default ServicesSection;