import React, {useState} from "react";
import {Card, Col, Form, InputGroup, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AddProductFormView(props) {
    const [fields, setFields] = useState({ name: "", description: "", price:"",picture:"" , brand:"", categoriesId: [], available: false });


    return(
        <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Ajouter un produit</Card.Header>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Nom du produit</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpName">
                                <i className="fa fa-at"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                aria-describedby="inpName"
                                placeholder="Veuillez entrer le nom du produit"
                                value={fields.name}
                                onChange={form => setFields({...fields, name: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Description</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpDescription">
                                <i className="fa fa-key"></i>
                            </InputGroup.Text>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                aria-describedby="inpDescription"
                                placeholder="Veuillez entrer la description du produit"
                                value={fields.description}
                                onChange={form => setFields({...fields, description: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Prix</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPrice">
                                <i className="fa fa-euro-sign"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                aria-describedby="inpPrice"
                                placeholder="Veuillez entrer le prix (la virgule doit être remplacée par un point)"
                                value={fields.price}
                                onChange={form => setFields({...fields, price: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Photo</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPicture">
                                <i className="fa fa-camera-alt"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                aria-describedby="inpPicture"
                                placeholder="Veuillez entrer le lien de la photo du produit"
                                value={fields.picture}
                                onChange={form => setFields({...fields, picture: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Disponibilité (coché si disponible)</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpAvailable">
                                <i className="fa fa-check"></i>
                            </InputGroup.Text>
                            <Form.Check
                                type="checkbox"
                                aria-describedby="inpAvailable"
                                checked={fields.available}
                                onChange={form => setFields({...fields, available: form.target.checked})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Marque du produit</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpBrand">
                                <i className="fa fa-brands"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                aria-describedby="inpBrand"
                                placeholder="Veuillez entrer votre code postal"
                                value={fields.brand}
                                onChange={form => setFields({...fields, brand: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Catégorie(s) du produit</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpCity">
                                <i className="fa fa-city"></i>
                            </InputGroup.Text>
                            {props.categories === null ? <p></p> : props.categories.map(category => (
                                <Form.Check
                                    key={category.id}
                                    type="checkbox"
                                    label={category.name}
                                    value={category.id}
                                    onChange={form => {
                                        if (form.target.checked) {
                                            setFields({...fields, categoriesId: [...fields.categoriesId, form.target.value]});
                                        } else {
                                            setFields({...fields, categoriesId: fields.categoriesId.filter(id => id !== form.target.value)});
                                        }
                                    }}
                                />
                            ))}
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-3 ps-3 pe-3">
                    <Col sm={{span: 10 }} lg={6} className="p-1">
                        <Nav.Link
                            className="btn bg-black w-100 text-white"
                            as={Link} to="/"
                            onClick={
                                () => props.addProduct(fields.name, fields.description, fields.price, fields.picture, fields.available, fields.brand, fields.categoriesId)
                            }
                        >
                            Enregistrer
                        </Nav.Link>
                    </Col>
                </Row>
            </Card>
        </Row>
    )
}