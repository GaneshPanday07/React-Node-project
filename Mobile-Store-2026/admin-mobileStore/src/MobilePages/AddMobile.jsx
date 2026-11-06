import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import {useState, useEffect } from "react"
import axios from "axios"

const AddMobile = () => {
    let navigate = useNavigate();
    let [mobileBrand, setMobileBrand] = useState('')
    let [mobileModel, setMobileModel] = useState('')
    let [price, setPrice] = useState('')
    let [ram, setRam] = useState('')
    let [rom, setRom] = useState('')

    useEffect(()=> {
      axios(()=> {

      })
    },[])
  return (
    <>
      <Container className="align-items-center justify-content-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col
            xs={12}
            md={6}
            lg={6}
            className="border p-4 rounded bg-white mt-5"
          >
            <h1 className="text-danger">Add Mobile</h1>
            <Form className="mt-4">
              <Form.Group>
                <Form.Label>Mobile Model </Form.Label>
                <Form.Control type="text" value={mobileModel} onClick={(e)=> setMobileModel(e.target.value)} placeholder="Enter Mobile Model"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Brand Name </Form.Label>
                <Form.Control type="text" value={brandName} onClick={(e) => setBrandName(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price </Form.Label>
                <Form.Control type="text" value={price} onclisk={(e) => setPrice(e.target.value)}> </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>RAM </Form.Label>
                <Form.Control type="text" value={ram} onClick={(e) => setRam(e.target.value)} ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>ROM </Form.Label>
                <Form.Control type="text" value="Rom" ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <div className="mt-3">
            <Button variant="secondary" onClick={() => navigate("/")}>
              Back 
            </Button>
            <Button className="ms-2" variant="success" onClick={() => navigate("/")}>
              Add Mobile
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default AddMobile;
