import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import axios from "axios"
function EditMobile() {
    let params = useParams()
    let id = params.id;
    let [mobile, setMobile] = useState({
        modelName: '',
        brandName: '',
        price: '',
        ram: '',
        rom: ''
    })

    
    useEffect(() => {
        axios({
            url: 'http://localhost:3000/edit/for/mobile/' + id,
            method: 'get'
        })
        .then((res) => {
            alert('ok')
            setMobile(res.data.data)
        })
        .catch((err) => {
            alert("err...")
        })
    })
    return(
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
                <h2 className='text-center text-danger'>Edit Mobile</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Model Name</Form.Label>
                            <Form.Control type="text" name="modelName" value={mobile.modelName}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" name="brandName" value={mobile.brandName}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="price" value={mobile.price}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="text" name="ram" value={mobile.ram}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROM</Form.Label>
                            <Form.Control type="text" name="rom" value={mobile.rom}></Form.Control>
                        </Form.Group>
                        <Button variant="warning" className="mt-3">Edit Mobile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default EditMobile