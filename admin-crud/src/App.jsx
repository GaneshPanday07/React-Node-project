import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/Books/AddBook'
import BookList from './pages/Books/BookList';
import Login from './Login';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login></Login>}>Add Book</Route>
                <Route path='/add/book' element={<AddBook></AddBook>}></Route>
                <Route path='/books' element={<BookList></BookList>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;