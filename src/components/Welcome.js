import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import ServicesController from "./controller/ServicesController";
import {Link} from "react-router-dom";

export default function Welcome(props) {
    return (
        <div>
            <div id="landingDiv">
                <Container className="landingContainer">
                    <div className="d-flex">
                        <Row id="rowLandingIcon">
                            <img id="landingIcon" className="" alt="Logo de l'entreprise 3D RAT PLUS" src="/pictures/landing/imageNuisible.png"/>
                        </Row>
                        <Row className="text-center d-flex align-content-center justify-content-center">
                            <h1 className='fs-3 text-center' id='titrePage'>3D RAT PLUS, INTERVENTION NUISIBLE DANS TOUT
                                PARIS ET EN ÎLE-DE-FRANCE</h1>
                            <p >Nous intervenons chez vous pour traîter vos problèmes de
                                nuisibles. <strong>Désinsectisation, dératisation, nid-de-guêpe/frelon, punaise de
                                    lit</strong></p>
                            <Button className="btn btn-danger btn-landing" as={Link} to="/request" ><i className="fa fa-file"></i>Demander un devis</Button>
                        </Row>
                    </div>
                </Container>
            </div>
            <div id="servicesDiv">
                <ServicesController
                    services={props.services}
                    setServices={(data) => props.setServices(data)}
                    oneService={props.oneService}
                    setOneService={(data) => props.setOneService(data)}
                 />
            </div>
            <div id="whereDiv" className="bg-black p-3">
                <h2 className="text-center text-light">Où nous trouver ?</h2>
                <Container>
                    <Row>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}