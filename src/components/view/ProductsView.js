import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import AddProductFormView from "./AddProductFormView";

export default function ProductsView(props){
    const [selectedCategory, setSelectedCategory] = useState(null);


    return (
        <div>
            <h2 className="text-center" >Nos produits</h2>
            <Container className="">
                {props.user !== null && props.user.roles[1].name.includes("ADMIN") ? <AddProductFormView categories={props.categories} addProduct={props.addProduct}/> : <p></p>}
                <Row>
                    <Form>
                        <Form.Select
                            aria-label="inpCategory"
                            className="mb-3"
                            onChange={e => setSelectedCategory(e.target.value)}
                        >
                            <option value="0">Sélectionnez un filtre de recherche</option>
                            {props.categories === null ? <option></option> : props.categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </Form.Select>
                        <Button className="btn btn-dark w-100" onClick={() => props.fetchProductsByCategory(selectedCategory)}>Filtrer</Button>
                    </Form>
                </Row>
                <Row className="justify-content-center gap-4 w-100 mt-4 mb-4">
                    {props.products === null ? <p></p> : props.products.map(products => (
                        <Col key={products.id} className="d-grid justify-content-center" xl={3} md={6} sm={12}>
                            <div className="cardPresta">

                                <div className="imgBoxPresta">
                                    <img src={products.picture} alt="" className="iconServices" />
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