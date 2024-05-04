import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ServicesView(props) {

    return (
        <div>
            <h2 className="text-center">Nos Services</h2>
            <Container className='d-flex align-items-center justify-content-center'>

                <Row className="d-flex justify-content-center align-items-center w-100 mt-4 mb-4">
                    {props.services === null ? <p></p> : props.services.map(services => (
                        <Col key={services.id} xl={3} md={6} sm={12} className="d-grid justify-content-center">
                            <div className="cardPresta">

                                <div className="imgBoxPresta">
                                    <img src={"/pictures/services/" + services.picture} alt="" className="iconServices" />
                                </div>

                                <div className="contentBoxPresta">
                                    <h3 className='text-center'>{services.name}</h3>
                                    <h2 className="price">À partir de : {services.price} €</h2>
                                    <p className='text-center'>{services.description.length > 120 ?
                                        `${services.description.substring(0, 120)}...` : services.description
                                    }</p>

                                    <Button value={services.id} className="buy" as={Link} onClick={() => props.fetchOneService(services.id)}  to={"/services/service/" + services.id}>
                                        Plus de détail

                                    </Button>
                                </div>

                            </div>
                        </Col>

                    ))}
                </Row>
            </Container>
        </div>
    )
}