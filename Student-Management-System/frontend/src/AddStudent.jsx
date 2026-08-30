import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
function AddStudent(){
    let navigate = useNavigate();
    let [rollNo, setRollNo] = useState('');
    let [studentName, setStudentName] = useState('');
    let[course, setCourse] = useState('');
    let[mobileNo, setMobileNo] = useState(0);
    function gotoHome(){
        navigate('/')
    }

    function gotoStudentsList(){
        navigate('/Student/List')
    }
    return(
       
        <Container>
            <Row>
                <Col>
                    <h1>Add Student</h1>
                    <Form>
                        <Form.Group className="mt-3">
                            <Form.Label>Roll No</Form.Label>
                            <Form.Control type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value) }></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" value={course} onChange={(e) => setCourse(e.target.value)} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="Number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} ></Form.Control>
                        </Form.Group>
                    
                        <Button className="mt-5">Add Student</Button>
                        <Button className="mt-5 ms-2" onClick={gotoHome}>Back To Home Page</Button>
                        <Button className="mt-5 ms-2" onClick={gotoStudentsList}>Student List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default AddStudent