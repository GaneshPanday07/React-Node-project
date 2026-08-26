import { useParams, useNavigate } from "react-router-dom"
import {useEffect} from 'react'
import { useState } from "react"
import axios from "axios"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function BookPageForEdit() {
    let params = useParams()
    let id = params.id;
    let [book, setBook] = useState({
        bookTitle: '',
        authorName: '',
        price: 0,
        isbnNo: '',
        nop: 0,
        publication: ''
        
    })
    let navigate = useNavigate();
    function gotoBookList() {
        navigate('/books')
    }
    useEffect(() => {
        axios({
            url: 'http://localhost:3000/book/for/edit/' + id,
            method: 'get'
        }).then((res) => {
            setBook(res.data.data)
        }).catch((err) => {
            alert('err ')
        })
    },[])
    return(
        <Container className='align-items-center justify-content-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col xs={12} md={6} lg={6} className='border p-4 rounded bg-white mt-5'>
                <h2 className='text-center text-danger'>Edit Book</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name="bookTitle" value={book.bookTitle}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="text" name="authorName" value={book.authorName}></Form.Control>
                    </Form.Group><Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="Number" name="price" value={book.price}></Form.Control>
                    </Form.Group><Form.Group>
                        <Form.Label>ISBN No</Form.Label>
                        <Form.Control type="text" name="isbnNo" value={book.isbnNo}></Form.Control>
                    </Form.Group><Form.Group>
                        <Form.Label>NOP</Form.Label>
                        <Form.Control type="Number" name="nop" value={book.nop}></Form.Control>
                    </Form.Group><Form.Group>
                        <Form.Label>Publication</Form.Label>
                        <Form.Control type="text" name="publication" value={book.publication}></Form.Control>
                    </Form.Group>
                    
                    <Button variant="danger" className='mt-3' onClick = {gotoBookList}>Cancel</Button>
                </Form>
                </Col>
            </Row>
        </Container>
)
}
export default BookPageForEdit