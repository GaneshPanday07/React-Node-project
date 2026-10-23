import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const AddMobile = () => {
    let navigate = useNavigate();
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
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Brand Name </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>RAM </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>ROM </Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <div className="mt-3">
            <Button variant="secondary" onClick={() => navigate('/')}>Back </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default AddMobile;
