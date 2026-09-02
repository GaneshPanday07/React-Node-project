import { useState, useEffect, useParams } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import axios from "axios"
function EditMobile() {
    let params = useParams()
    return(
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
                <h2 className='text-center text-danger'>Edit Mobile</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Model Name</Form.Label>
                            <Form.Control type="text" name="modelName"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" name="brandName"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="price"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="text" name="ram"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROM</Form.Label>
                            <Form.Control type="text" name="rom"></Form.Control>
                        </Form.Group>
                        <Button variant="warning" className="mt-3">Edit Mobile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default EditMobile