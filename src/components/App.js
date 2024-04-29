import React, { useState, useContext } from "react";
import {Container, Nav, Navbar, Row} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { myContext } from '../index';
import Welcome from "./Welcome";
import ProductsController from "./controller/ProductsController";
import ServicesController from "./controller/ServicesController";
import ConnectionController from "./controller/ConnectionController";
import SingleServiceView from "./view/SingleServiceView";
import SingleServiceController from "./controller/SingleServiceController";
import RegisterController from "./controller/RegisterController";
import QuoteRequestController from "./controller/QuoteRequestController";


export default function App() {

  const [user, setUser] = useState(null);
  const [services, setServices] = useState(null);
  const [oneService, setOneService] = useState(null);
  const [idService, setIdService] = useState(null);



  function userName() {
    return user !== null ? `${user.firstName} ${user.lastName}` : "";
  }

  return (
      <myContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <Navbar
              className='mb-5'
              collapseOnSelect="true"
              bg='light'
              variant='white'
              sticky='top'
              expand='md'
          >
            <Container>
              <Row>
                <Navbar.Brand as={Link} to="/" className='fst-bold'>3D RAT PLUS</Navbar.Brand>
              </Row>
              <Row>
                <img id="logo" alt="Logo de l'entreprise 3D RAT PLUS" src="/pictures/logo/LOGO-V2.png"/>
              </Row>
              <Row>
                {/*<Navbar.Brand className='fst-italic'>{userName()}</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link as={Link} eventKey='1' to="/home">
                      <i className='fa fa-home me-2'></i>
                      Accueil
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey='2' to="/products">
                      <i className='fa fa-list me-2'></i>
                      Produits
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey='3' to="/services">
                      <i className='fa fa-table-list me-2'></i>
                      Services
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey='4' to="/register" hidden={user !== null}>
                      <i className='fa fa-user-plus me-2'></i>
                      Inscription
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey='5' to="/connection" hidden={user !== null}>
                      <i className='fa fa-right-to-bracket me-2'></i>
                      Connexion
                    </Nav.Link>
                    <Nav.Link as={Link} eventKey='6' to="/" hidden={user === null} onClick={() => {
                      setUser(null);
                    }}>
                      <i className='fa fa-unlock me-2'></i>
                      Déconnexion
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Row>

            </Container>
          </Navbar>

          <article>
              <Routes>
                <Route exact path="/" element={<Welcome services={services} setServices={(data) => setServices(data)}/>}/>
                <Route exact path="/home" element={<Welcome
                    services={services}
                    setServices={(data) => setServices(data)}
                    oneService={oneService}
                    setOneService={(data) => setOneService(data)}
                />}/>
                <Route exact path="/products" element={<ProductsController />}/>
                <Route exact path="/services" element={<ServicesController
                    services={services}
                    setServices={(data) => setServices(data)}
                    setIdService={(data) => setIdService(data)}
                    oneService={oneService}
                    setOneService={(data) => setOneService(data)}
                />}/>
                <Route exact path="/connection" element={<ConnectionController />} />
                <Route exact path="/register" element={<RegisterController />} />
                <Route exact path="/service/:id" element={<SingleServiceController idService={idService} oneService={oneService} setOneService={(data) => setOneService(data)} />} />
                <Route exact path="/request" element={<QuoteRequestController />}/>
              </Routes>
          </article>
        </BrowserRouter>
      </myContext.Provider>
  );
}