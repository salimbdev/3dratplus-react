import React from "react";
import {Container, Row} from "react-bootstrap";

export default function SingleServiceView(props) {

    return (
        <Container>
        {
            props.oneService === null ? <p></p> :

                    <Row className="d-flex justify-content-center p-3 pt-5">
                        <h2>{props.oneService.name}</h2>
                        <img src={"/pictures/services/" + props.oneService.picture} alt={props.oneService.name + " logo"} className="iconServices" />
                        <p>{props.oneService.description}</p>
                        <p>{props.oneService.price}</p>
                    </Row>

        }
        </Container>
    )
}