import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
function AddStudent(){
    let navigate = useNavigate();
    let [rollNo, setRollNo] = useState();
    function gotoHome(){
        navigate('/')
    }
    return(
       
        <Container>
            <Row>
                <Col>
                    <h1>Add Student</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Roll No</Form.Label>
                            <Form.Control type="text" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="text" ></Form.Control>
                        </Form.Group>
                    
                        <Button className="mt-3">Add Student</Button>
                        <Button className="mt-3" onClick={gotoHome}>Back To Home Page</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default AddStudent