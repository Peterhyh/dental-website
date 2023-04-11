import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const Location = () => {

    const handleSubmit = (values, { resetForm }) => {
        axios.post('http://localhost:3001/contact', {
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
                alert('Message sent!')
            })
            .catch(error => console.error(error));
        resetForm()
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1>Contact Us</h1>
            <br />
            <Container className='location-container p-5 mb-5'>
                <Row className='d-flex justify-content-center'>
                    <Col md='12'>
                        <h2>Location:</h2>
                    </Col>
                    <Col md='5'>
                        <p class='location-subheader'>1234 Demo Ave. Suite #5 City, State, Zip</p>
                        <br />
                        <hr class='horizontal-rule' />
                        <br />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col md='7'>
                        <Formik
                            initialValues={{
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
                                    <Label className='contact-form-label' htmlFor='name'>
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
                                    <Label className='contact-form-label' htmlFor='email'>
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
                                    <Label className='contact-form-label' htmlFor='phone'>
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
                    </Col>
                </Row>
            </Container >
        </>
    )
};

export default Location;