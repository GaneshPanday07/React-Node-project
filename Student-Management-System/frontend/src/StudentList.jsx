import { Container, Row, Col, Button, Table } from "react-bootstrap"
function StudentList(){
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="text-center mt-5">Book List</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>RollNo</th>
                                <th>Student Name</th>
                                <th>Course</th>
                                <th>MobileNo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default StudentList