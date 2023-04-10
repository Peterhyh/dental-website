import { PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Parallax } from 'react-parallax';
import { useState } from 'react';
import RootCanals from '../../app/assets/img/rootcanal.png';
import Cosmetic from '../../app/assets/img/cosmetic.png';
import Implant from '../../app/assets/img/implant.png';
import Restorations from '../../app/assets/img/restorations.png';
import Cleaning from '../../app/assets/img/cleaning.png';
import Veneers from '../../app/assets/img/veneers.png';
import Pattern from '../../app/assets/img/pattern.png'

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
                    <div className='overlay-container d-flex align-items-center justify-content-center'>

                        <button class='services-buttons'>
                            <img src={Veneers} alt='Venners icon' />
                            <h1>Veneers</h1>
                        </button>

                        <button class='services-buttons'>
                            <img src={RootCanals} alt='Root Canal icon' />
                            <h1>Root Canals</h1>
                        </button>

                        <button class='services-buttons'>
                            <img src={Implant} alt='Implant icon' />
                            <h1>Implant</h1>
                        </button>

                        <button class='services-buttons'>
                            <img src={Restorations} alt='Restoration icon' />
                            <h1>Restoration</h1>
                        </button>

                        <button class='services-buttons'>
                            <img src={Cleaning} alt='Cleaning icon' />
                            <h1>Cleaning</h1>
                        </button>

                        <button class='services-buttons'>
                            <img src={Cosmetic} alt='Cosmetic icon' />
                            <h1>Cosmetic</h1>
                        </button>
                    </div>
                </div>
            </Parallax>
            <br />
        </>
    )
};

export default ServicesSection;