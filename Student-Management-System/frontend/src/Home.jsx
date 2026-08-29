import { useNavigate } from 'react-router-dom'
function Home(){
    let navigate = useNavigate();
    function gotoAddStudent(){
        navigate('/Add/Student')
    }

    return(
        <>
        <h1>Student Management System.</h1> 
        <button onClick={gotoAddStudent}>Add Student</button>
        </>
        
    )
}
export default Home