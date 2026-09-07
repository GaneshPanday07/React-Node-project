import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'
function App() {
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}>Home page</Route>
                <Route path='/Add/Student' element={<AddStudent></AddStudent>}>Add Student</Route>
                <Route path='/Student/List' element={<StudentList></StudentList>}>Students List</Route>
            </Routes>
       </BrowserRouter>
    )
}
export default App