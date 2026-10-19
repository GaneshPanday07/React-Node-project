import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MobileList from './MobilePages/MobileList'
const App = () => {
  return (
   <BrowserRouter>
        <Routes>

          <Route path="/" element={<MobileList />}>Mobile List</Route>

        </Routes>
   </BrowserRouter>
  )
}
export default App