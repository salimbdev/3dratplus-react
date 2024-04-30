import React from "react";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import ServicesController from "./controller/ServicesController";
import {Link} from "react-router-dom";

export default function Welcome(props) {
    return (
        <div>
            {props.alertMessage !== null ?
                <Alert key={props.alertVariant} variant={props.alertVariant} className="text-center" onClick={() => {
                    // props.setAlertMessage(null);
                    // props.setAlertVariant(null);

                }}>{props.alertMessage}</Alert> : <p></p>
            }
            <div id="landingDiv">
                <Container className="landingContainer">
                    <div >
                        <Row className="">
                            <Col className="text-center" id="rowLandingIcon" xl={6} md={6} sm={12} >
                                <img id="landingIcon" className="" alt="Logo de l'entreprise 3D RAT PLUS" src="/pictures/landing/imageNuisible.png"/>
                            </Col>
                            <Col className="text-center align-content-center justify-content-center" xl={6} md={6} sm={12} >
                                <h1 className='fs-3 text-center' id='titrePage'>3D RAT PLUS, INTERVENTION NUISIBLE DANS TOUT
                                PARIS ET EN ÎLE-DE-FRANCE</h1>
                                <p >Nous intervenons chez vous pour traîter vos problèmes de
                                nuisibles. <strong>Désinsectisation, dératisation, nid-de-guêpe/frelon, punaise de
                                    lit</strong></p>
                            <Button className="btn btn-danger btn-landing" as={Link} to="/request" ><i className="fa fa-file"></i>Demander un devis</Button>
                            </Col>
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