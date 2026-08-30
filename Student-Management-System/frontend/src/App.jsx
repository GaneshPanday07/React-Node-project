import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddStudent from './AddStudent'
import StudentList from './StudentList'
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