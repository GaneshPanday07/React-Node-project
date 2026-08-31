import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import axios from "axios"
function AddMobile() {
    let [modelName, setModelName] = useState('')
    let [brandName, setBrandName] = useState('')
    let [price, setPrice] = useState('')
    let [ram, setRam] = useState('')
    let [rom, setRom] = useState('')
    let navigate = useNavigate()
    function addmobile(e) {
        let data = {
            modelName: modelName,
            brandName: brandName,
            price: price,
            ram: ram,
            rom: rom
        }
        axios({
            url: 'http://localhost:3000/add/mobile/',
            method: 'post',
            data: data
        }).then((res)=> {
            alert(res.data.message)
            navigate('/mobiles')
        })
        .catch((err) => {
            alert(err.message)
        })    
    }
    
    return(
        <>
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
                    <h1 className='text-center text-danger'>Add Mobile</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Model Name</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setModelName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setBrandName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setPrice(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setRam(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ROM</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setRom(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant="success" className='mt-3' onClick = {addmobile}>Add Mobile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default AddMobile