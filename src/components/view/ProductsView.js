import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

export default function ProductsView(props){


    return (
        <div>
            <h2 className="text-center" >Nos produits</h2>
            <Container>
            <Row className="d-flex align-items-center gap-4 w-100 mt-4 mb-4">
                {props.products === null ? <p></p> : props.products.map(products => (
                    <Col key={products.id} className="" xl={3} md={6} sm={12}>
                        <div className="cardPresta">

                            <div className="imgBoxPresta">
                                <img src={"/pictures/services/" + products.picture} alt="" className="iconServices" />
                            </div>

                            <div className="contentBoxPresta">
                                <h3 className='text-center'>{products.name}</h3>
                                <h2 className="price">À partir de : {products.price} €</h2>
                                <p className='text-center'>{products.description.length > 120 ?
                                    `${products.description.substring(0, 120)}...` : products.description
                                }</p>
                                <Button value={products.id}  className="buy">Plus de détail</Button>
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>
            </Container>
        </div>
    )
}