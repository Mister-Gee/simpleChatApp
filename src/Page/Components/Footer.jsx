import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Form className="form">
            <Row>
                <Form.Group as={Col} controlId="formGridText">
                    <Form.Control type="text" placeholder="Start Typing..." />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Button>Send</Button>
                </Form.Group>
            </Row>
        </Form>
    </footer>
  )
}

export default Footer