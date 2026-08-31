import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Container, Row,Col, Table, Button } from 'react-bootstrap'
function MobileList(){
    let navigate = useNavigate()
    function gotoAddMobile(){
        navigate('/add/mobile')
    }
    let [mobiles, setMobiles] = useState([])
    useEffect(() => {
        axios({

            url: 'http://localhost:3000/mobiles',
            method: 'get'
        }).then((res) => {
            setMobiles(res.data.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])
    return(
        <Container>
            <Row>
                <Col>
                <Button className="mt-5" variant="success" style={{float:'right' }} onClick={gotoAddMobile}>Add Mobile</Button>
                <h2 class ="text-center text-danger mt-5">Mobiles List</h2>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>modelName</th>
                                <th>Brand Name</th>
                                <th>Price</th>
                                <th>RAM</th>
                                <th>ROM</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mobiles.map((mobile) => 
                                    <tr>
                                        <td>{mobile.modelName}</td>
                                        <td>{mobile.brandName}</td>
                                        <td>{mobile.price}</td>
                                        <td>{mobile.ram}</td>
                                        <td>{mobile.rom}</td>
                                        <td>
                                            <i class="bi bi-trash text-danger"></i>
                                            <i class="bi bi-pencil text-info ms-4"></i>
                                        </td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default MobileList