import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from './MobleFolder/Mobiles/Login'
import AddMobile from './MobleFolder/Mobiles/AddMobile'
import Sidebarmenu from './Sidebarmenu'
import MobileList from './MobleFolder/Mobiles/MobileList'
import EditMobile from './MobleFolder/Mobiles/EditMobile'
function App() {
    return(
        <BrowserRouter>
            <Sidebarmenu>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/add/mobile' element={<AddMobile></AddMobile>}></Route>
                <Route path='/mobiles' element={<MobileList></MobileList>}></Route>
                <Route path='/edit/mobile' element={<EditMobile></EditMobile>}></Route>
            </Routes>
            </Sidebarmenu>
        </BrowserRouter>
    )
}
export default App