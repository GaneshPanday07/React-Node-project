import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/Books/AddBook'
import BookList from './pages/Books/BookList';
import Login from './Login';
import Sidebarmenu from './Sidebarmenu';
import BookPageForEdit from './pages/Books/BookPageForEdit';
function App() {
    return (
        <BrowserRouter>
            <Sidebarmenu>
            <Routes>
                <Route path='/' element={<Login></Login>}>Login page</Route>
                <Route path='/add/book' element={<AddBook></AddBook>}>Add Book</Route>
                <Route path='/books' element={<BookList></BookList>}>Books list</Route>
                <Route path='/edit/book/:id' element={<BookPageForEdit></BookPageForEdit>} ></Route>
            </Routes>
            </Sidebarmenu>
        </BrowserRouter>
    )
}

export default App;