import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL
function EditMobile() {
    let navigate = useNavigate();
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
            //url: 'http://localhost:3000/edit/for/mobile/' + id,
            url: apiUrl + '/edit/for/mobile/' + id,
            method: 'get'
        })
        .then((res) => {
            setMobile(res.data.data)
        })
        .catch((err) => {
            alert("err...")
        })
    }, [])
    function manageUpdate(e) {
        let name = e.target.name
        let value = e.target.value
        setMobile((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function EditMobile() {
        navigate('/mobiles')
    }

    
    return(
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
                <h2 className='text-center text-danger'>Edit Mobile</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Model Name</Form.Label>
                            <Form.Control type="text" name="modelName" value={mobile.modelName} onChange={manageUpdate}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" name="brandName" value={mobile.brandName} onChange={manageUpdate}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="price" value={mobile.price} onChange={manageUpdate}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="text" name="ram" value={mobile.ram} onChange={manageUpdate}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROM</Form.Label>
                            <Form.Control type="text" name="rom" value={mobile.rom} onChange={manageUpdate}></Form.Control>
                        </Form.Group>
                        <Button variant="primary" className="mt-3" onClick={() => navigate('/mobiles')}>Cancel</Button>
                        <Button variant="warning" className="mt-3 ms-2" onClick={EditMobile}>Edit Mobile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default EditMobile