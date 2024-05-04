import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function SingleProductView(props) {
    return (
        <div>
            {props.oneProduct === null ? <p></p> :
                <Container>
                    <Row className="">
                        <Col className="d-flex flex-column justify-content-center">
                            <h2>{props.oneProduct.name}</h2>
                            <p>Marque : {props.oneProduct.brand}</p>
                            <p>Prix : {props.oneProduct.price} €</p>
                            <p>Disponibilité : {props.oneProduct.available ?
                                <span className="text-success"><i className="fa fa-check"></i></span> :
                                <span className="text-danger"><i className="fa fa-x"></i></span>}</p>
                            <p>{props.oneProduct.description}</p>

                        </Col>
                    </Row>
                    {props.user === null ? <p></p> :
                    <Row>

                    </Row>
                    }
                    <Row>

                    </Row>
                </Container>

            }
        </div>
    )
}