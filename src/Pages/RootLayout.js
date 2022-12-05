import React from 'react'
import { Row,Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Header from './../components/Header/Header';
import {Outlet} from "react-router-dom"
const RootLayout = () => {
  return (
    <div>
      <Container>
            <Header/>
            <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                  <Outlet/>
                </Col>
                
            </Row>
      </Container>
    </div>
  )
}

export default RootLayout
