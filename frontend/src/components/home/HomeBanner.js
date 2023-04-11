import { Parallax } from 'react-parallax';
import Banner from '../../app/assets/img/banner.jpg';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const HomeBanner = () => {
    const [openModal, setOpenModal] = useState(false);

    const toggleExit = () => {
        setOpenModal(!openModal)
    };

    const handleSubmit = (values, { resetForm }) => {
        axios.post('http://localhost:3001/appointment', {
            timeAndDate: values.timeAndDate,
            name: values.name,
            email: values.email,
            phone: values.phone,
            veneers: values.veneers,
            rootCanal: values.rootCanal,
            implant: values.implant,
            restoration: values.restoration,
            cleaning: values.cleaning,
            cosmetic: values.cosmetic,
        })
            .then(() => {
                alert('Appointment sent!')
            })
            .catch(error => console.error(error));
        resetForm()
        setOpenModal(!openModal)
    };

    return (
        <>
            <Modal isOpen={openModal}>
                <ModalHeader toggle={toggleExit}>
                    Setup your appointment:
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            timeAndDate: '',
                            name: '',
                            email: '',
                            phone: '',
                            veneers: false,
                            rootCanal: false,
                            implant: false,
                            restoration: false,
                            cleaning: false,
                            cosmetic: false,
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='timeAndDate'>Select a time and date:</Label>{' '}
                                <Field
                                    name='timeAndDate'
                                    type='datetime-local'
                                    id='timeAndDate'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='name'>
                                    Name
                                </Label>
                                <Field
                                    name='name'
                                    placeholder='First and last name'
                                    className='form-control'
                                    type='text'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='email'>
                                    E-mail
                                </Label>
                                <Field
                                    name='email'
                                    placeholder='example@gmail.com'
                                    className='form-control'
                                    type='email'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='phone'>
                                    Phone number
                                </Label>
                                <Field
                                    name='phone'
                                    placeholder='(XXX) XXX-XXXX'
                                    className='form-control'
                                    type='phone'
                                />
                            </FormGroup>

                            <FormGroup>
                                <p>{'What service(s) are you needing?'}</p>
                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='veneers'
                                        type='checkbox'
                                    />{' '}
                                    Veneer
                                </Label>

                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='rootCanal'
                                        type='checkbox'
                                    />{' '}
                                    Root Canal
                                </Label>

                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='implant'
                                        type='checkbox'
                                    />{' '}
                                    Implant
                                </Label>

                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='restoration'
                                        type='checkbox'
                                    />{' '}
                                    Restoration
                                </Label>

                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='cleaning'
                                        type='checkbox'
                                    />{' '}
                                    Cleaning
                                </Label>

                                <Label className='m-1'>
                                    <Field
                                        className='form-check-input'
                                        name='cosmetic'
                                        type='checkbox'
                                    />{' '}
                                    Cosmetic
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button className='m-5' type='submit' color='primary'>
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
            <Parallax strength={400} bgImage={Banner}>
                <div className='content d-flex justify-content-center align-items-center'>
                    <div>
                        <h1>SweetlyDental</h1>
                        <h3>Dental and Orthodontics</h3>
                        <button className='appointment-button mt-5 rounded-pill p-2' onClick={() => setOpenModal(!openModal)}>Click here to book your appointment today!</button>
                    </div>
                </div>
            </Parallax>
        </>
    )
};

export default HomeBanner;