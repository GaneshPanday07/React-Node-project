import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Sidebarmenu from './Sidebarmenu'
//login 
import Login from './MobleFolder/Mobiles/Login'

//mobile
import AddMobile from './MobleFolder/Mobiles/AddMobile'
import MobileList from './MobleFolder/Mobiles/MobileList'
import EditMobile from './MobleFolder/Mobiles/EditMobile'
function App() {
    return(
        <BrowserRouter>
            <Sidebarmenu>
            <Routes>
                {/** login page */}
                <Route path='/' element={<Login></Login>}></Route>
                {/**mobile pages*/}
                <Route path='/add/mobile' element={<AddMobile></AddMobile>}></Route>
                <Route path='/mobiles' element={<MobileList></MobileList>}></Route>
                <Route path='/edit/mobile/:id' element={<EditMobile></EditMobile>}></Route>
            </Routes>
            </Sidebarmenu>
        </BrowserRouter>
    )
}
export default App