import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import { useNavigate } from "react-router-dom";
import { MyCarousel, Footer } from '../HomePage/description';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function HomePage() {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login');
    }
    const navigateRegister = () => {
        navigate('/register');
    }
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };
    return (
        <>
            <Navbar className="navHeight" data-bs-theme="dark" sticky="top">
                <Container fluid className="textHeight">
                    <Navbar.Brand href="#home"><h3 className='fw-bold fs-2'>Share Extra Bites</h3></Navbar.Brand>
                    <Nav className="me-right">
                        <Nav.Link onClick={handleShow} >Contact</Nav.Link>
                        <Nav.Link onClick={navigateRegister}>Register</Nav.Link>
                        <Nav.Link onClick={navigateLogin}>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br /><br />
            <MyCarousel />
            <Footer />
            <Modal className=" modal-lg" show={showModal} onHide={handleClose}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className='fs-2'>Get in touch with us now! We will reach back to you soon.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column className='fs-4'>
                                Enter your email
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <button className='fs-4 buttonStyle'>Submit</button>
                        </div>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomePage;