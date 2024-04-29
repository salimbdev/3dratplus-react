import React, {useState} from "react";
import {Card, Col, Container, Form, InputGroup, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function RegisterView(props) {
    const [fields, setFields] = useState({ username: "", password: "", firstName:"", lastName:"", address:"", postalCode:"", city:"", phoneNumber:"" });


    return(
        <Container>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Inscription</Card.Header>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Identifiant</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpLogin">
                                    <i className="fa fa-at"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpLogin"
                                    placeholder="Veuillez entrer un email"
                                    value={fields.username}
                                    onChange={form => setFields({...fields, username: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Mot de passe</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPassword">
                                    <i className="fa fa-key"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    aria-describedby="inpPassword"
                                    placeholder="Veuillez entrer un mot de passe"
                                    value={fields.password}
                                    onChange={form => setFields({...fields, password: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Prénom</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpFirstName">
                                    <i className="fa fa-user"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpFirstName"
                                    placeholder="Veuillez entrer votre prénom"
                                    value={fields.firstName}
                                    onChange={form => setFields({...fields, firstName: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Nom</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpLastName">
                                    <i className="fa fa-user"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpLastName"
                                    placeholder="Veuillez entrer votre nom"
                                    value={fields.lastName}
                                    onChange={form => setFields({...fields, lastName: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Adresse</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpAddress">
                                    <i className="fa fa-address-card"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpAddress"
                                    placeholder="Veuillez entrer votre adresse"
                                    value={fields.address}
                                    onChange={form => setFields({...fields, address: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Code postal</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPostalCode">
                                    <i className="fa fa-code"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpPostalCode"
                                    placeholder="Veuillez entrer votre code postal"
                                    value={fields.postalCode}
                                    onChange={form => setFields({...fields, postalCode: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Ville</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpCity">
                                    <i className="fa fa-city"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpCity"
                                    placeholder="Veuillez entrer votre ville"
                                    value={fields.city}
                                    onChange={form => setFields({...fields, city: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Numéro de téléphone</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPhoneNumber">
                                    <i className="fa fa-phone"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpPhoneNumber"
                                    placeholder="Veuillez entrer votre numéro de téléphone"
                                    value={fields.phoneNumber}
                                    onChange={form => setFields({...fields, phoneNumber: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pb-3 ps-3 pe-3">
                        <Col sm={{span: 10 }} lg={6} className="p-1">
                            <Nav.Link
                                className="btn bg-black w-100 text-white"
                                as={Link} to="/"
                                onClick={
                                () => props.fetchRegisterUser(fields.username, fields.password, fields.firstName, fields.lastName, fields.address, fields.postalCode, fields.city, fields.phoneNumber)
                            }
                            >
                                Inscription
                            </Nav.Link>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Container>
    )
}