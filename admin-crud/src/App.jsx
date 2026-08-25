import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/Books/AddBook'
import BookList from './pages/Books/BookList';
import Login from './Login';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login></Login>}>Login page</Route>
                <Route path='/add/book' element={<AddBook></AddBook>}>Add Book</Route>
                <Route path='/books' element={<BookList></BookList>}>Books list</Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;