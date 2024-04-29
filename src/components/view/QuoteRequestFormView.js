import React, {useState} from "react";
import {Card, Col, Container, Form, InputGroup, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function QuoteRequestFormView() {
    const [fields, setFields] = useState({ description: "", pieceNumber: "", totalArea:"",startingDate:"" ,picture1:"", picture2:"", picture3:"" });

    return(
        <Container>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Demande de devis</Card.Header>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Description</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpDescription">
                                    <i className="fa fa-file-archive"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="textArea"
                                    aria-describedby="inpDescription"
                                    placeholder="Veuillez entrer la description de votre demande"
                                    value={fields.description}
                                    onChange={form => setFields({...fields, description: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Nombre de pièce(s)</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPieceNumber">
                                    <i className="fa fa-map"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpPieceNumber"
                                    placeholder="Veuillez entrer le nombre de pièce(s) concernée(s)"
                                    value={fields.pieceNumber}
                                    onChange={form => setFields({...fields, password: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Superficie</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpTotalArea">
                                    <i className="fa fa-home"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpTotalArea"
                                    placeholder="Veuillez entrer la superficie totale concernée"
                                    value={fields.totalArea}
                                    onChange={form => setFields({...fields, totalArea: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Date de début d'infestation</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpStartingDate">
                                    <i className="fa fa-calendar"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="date"
                                    aria-describedby="inpStartingDate"
                                    value={fields.startingDate}
                                    onChange={form => setFields({...fields, startingDate: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Photo n°1</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPicture1">
                                    <i className="fa fa-photo-film"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="file"
                                    aria-describedby="inpPicture1"
                                    value={fields.picture1}
                                    onChange={form => setFields({...fields, picture1: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Photo n°2 (optionnel)</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPicture2">
                                    <i className="fa fa-photo-film"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="file"
                                    aria-describedby="inpPicture2"
                                    value={fields.picture2}
                                    onChange={form => setFields({...fields, picture2: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Photo n°3 (optionnel)</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPicture3">
                                    <i className="fa fa-photo-film"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="file"
                                    aria-describedby="inpPicture3"
                                    value={fields.picture3}
                                    onChange={form => setFields({...fields, picture3: form.target.value})}
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
                                    () => props.postQuoteRequest(fields.username, fields.password, fields.firstName, fields.lastName, fields.address, fields.postalCode, fields.city, fields.phoneNumber)
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