
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL
function AddBook() {
        let navigate = useNavigate();
    let [bookTitle, setBookTitle] = useState('')
    let [authorName, setAuthorName] = useState('')
    let [price, setPrice] = useState(0)
    let [isbnNo, setIsbnNo] = useState('')
    let [nop, setNop] = useState(0)
    function addBook() {
        let data = {
            bookTitle: bookTitle,
            authorName: authorName,
            price: price,
            isbnNo: isbnNo,
            nop: nop,
        }
        axios({
            //url: 'http://localhost:3000/add/book',
            url: apiUrl + '/add/book', 
            method: 'post',
            data: data
        }).then((res)=> {
            alert(res.data.message)
            navigate('/books')
        })
        .catch((err)=> {
            alert(err)
        })
    }
    return(
        <>
        
        </>
    )
}
export default AddBook
