import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddMobile = () => {
  let navigate = useNavigate();
  let [mobileBrand, setMobileBrand] = useState("");
  let [mobileModel, setMobileModel] = useState("");
  let [price, setPrice] = useState("");
  let [ram, setRam] = useState("");
  let [rom, setRom] = useState("");

  const addMobile = (e) => {
    const addMobile = (e) => {
      e.preventDefault();

      const mobileData = {
        mobileBrand,
        mobileModel,
        price: Number(price),
        ram,
        rom,
      };

      console.log("Sending Data:", mobileData);

      axios({
        url: "http://localhost:3000/add/mobile",
        method: "post",
        data: mobileData,
      })
        .then((res) => {
          console.log("Success:", res.data);
          alert("Mobile Added Successfully!");
        })
        .catch((err) => {
          console.log("Error:", err.response?.data || err.message);
          alert(err.response?.data?.message || "Something went wrong!");
        });
    };
  };

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
            <Form className="mt-4" onSubmit={addMobile}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Model </Form.Label>
                <Form.Control
                  type="text"
                  value={mobileModel}
                  onChange={(e) => setMobileModel(e.target.value)}
                  placeholder="Enter Mobile Model"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>MobileBrand </Form.Label>
                <Form.Control
                  type="text"
                  value={mobileBrand}
                  onChange={(e) => setMobileBrand(e.target.value)}
                  placeholder="Enter Mobile Brand"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price </Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter Moile Price"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>RAM </Form.Label>
                <Form.Control
                  type="text"
                  value={ram}
                  onChange={(e) => setRam(e.target.value)}
                  placeholder="Enter Mobile RAM"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ROM </Form.Label>
                <Form.Control
                  type="text"
                  value={rom}
                  onChange={(e) => setRom(e.target.value)}
                  placeholder="Enter Mobile ROM"
                  required
                ></Form.Control>
              </Form.Group>

              <Button
                className="mt-3"
                type="button"
                variant="secondary"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
              <Button type="submit" className="ms-2 mt-3" variant="success">
                Add Mobile
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddMobile;
