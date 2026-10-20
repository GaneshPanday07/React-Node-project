import { Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const MobileList = () => {
    let navigate = useNavigate();

    return (
      <Container>
        <Row>
          <Col>
            <h1>we are write Mobile list page here....</h1>
            <Button onClick={()=> navigate("/")}>Login Page</Button>
          </Col>
        </Row>
      </Container>
    );
}
export default MobileList