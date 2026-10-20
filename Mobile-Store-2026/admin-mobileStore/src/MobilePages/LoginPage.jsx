import { useNavigate } from "react-router-dom"
import { Button, Container, Row, Col} from "react-bootstrap"
const LoginPage = () => {
    let navigate = useNavigate();

    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col>
              <h1>we are write here Login page....</h1>
              <Button onClick={() => navigate("/mobilelist")}>
                Mobile list
              </Button>
              <div>
                <Button className="mt-3" onClick={() => navigate("/addmobile")}>
                  Add Mobile
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default LoginPage