import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
function Home(){
    let navigate = useNavigate();
    
    return(
        
        <Container>
            <Row>
                <Col>
                <diV className="text-center mt-5">
                    <h1>Student Management System.</h1>
                    <p>Easy to Access Student All details.</p>
                    <Button onClick={() => navigate('/Add/Student')}>Add Student</Button> 
                </diV>
                </Col>
            </Row>
        </Container>
        
        
        
    )
}
export default Home