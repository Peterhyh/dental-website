import { Parallax } from 'react-parallax';
import Pattern from '../../app/assets/img/pattern.png';
import { Col } from 'reactstrap';

const MissionSection = () => {
    return (


        <Parallax className='mt-5 mb-5' strength={500} bgImage={Pattern}>
            <div className='mission-banner d-flex align-items-center'>
                <div className='mission-description d-flex align-items-center justify-content-center'>
                    <Col className='d-flex align-items-center justify-content-center' md='7'>
                        <h1 className='mission-title'>Our mission is to provide patients with excellent services and guiding them to a happier and healthier life.</h1>
                    </Col>
                </div>
            </div>
        </Parallax>


    )
};

export default MissionSection;