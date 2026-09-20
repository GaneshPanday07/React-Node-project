import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
function Home(){
    let navigate = useNavigate();
    
    return(
        
        <Container>
            <Row>
                <Col>
                    <h1>Student Management System.</h1> 
        <Button onClick={() => navigate('/Add/Student')}>Add Student</Button>
                </Col>
            </Row>
        </Container>
        
        
        
    )
}
export default Home