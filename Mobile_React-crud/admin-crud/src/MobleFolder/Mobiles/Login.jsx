
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
function Login() {
    let navigate = useNavigate()
    function gotoAddMobile() {
        navigate('/add/mobile')
    }
    return (
        <>
      <h1>Login page.....</h1>
     <Button onClick={gotoAddMobile}>Add Mobile</Button>   
    </>

    )
}
export default Login