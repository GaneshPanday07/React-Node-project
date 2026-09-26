import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Row,Col, Table, Button } from 'react-bootstrap'
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL

function MobileList(){
    let [isDelete, setIsDelete] = useState(false)
    let [mobiles, setMobiles] = useState([])

    let navigate = useNavigate()

    function handleDelete(id) {
        axios({
            //url: 'http://localhost:3000/delete/mobile/' + id,
            url: apiUrl + '/delete/mobile/' + id,
            method: 'delete',
        })
        .then((res) => {
            alert("Data has been delete Sucessfully...");
            setIsDelete(true)
        })
        .catch((err) => {
            alert("err")
        })
    }
    function handleUpdate(id) {
        navigate('/edit/mobile/' + id)
    }

    useEffect(() => {
        axios({
            //url: 'http://localhost:3000/mobiles',
            url: apiUrl + '/mobiles',
            method: 'get'
        }).then((res) => {
            setMobiles(res.data.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[isDelete])
    return(
        <Container>
            <Row>
                <Col>
                <Button className="mt-5" variant="success" style={{float:'right' }} onClick={() => navigate('/add/mobile')}>Add Mobile +</Button>
                <h2 class ="text-center text-danger mt-5">Mobiles List</h2>
                    <Table >
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
                                            <i class="bi bi-pencil text-info ms-2" onClick={() => handleUpdate(mobile._id)}></i>
                                            <i class="bi bi-trash text-danger ms-4" onClick={() => handleDelete(mobile._id)}></i>
                                            
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