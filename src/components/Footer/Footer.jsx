import React from 'react'

import { Col, Container, Row } from 'reactstrap'

import './Footer.styles.scss'

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs="3">
          <h3>Bolt</h3>
          <ul>
            <li>Careers</li>
            <li>Terms</li>
            <li>Help</li>
          </ul>
        </Col>
        <Col xs="4" sm="3">
          <h3>More Bolt</h3>
          <ul>
            <li>Gift Cards</li>
            <li>Trailers</li>
          </ul>
        </Col>
        <Col xs="4" sm="3">
          <h3>News</h3>
          <ul>
            <li>Blog</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
