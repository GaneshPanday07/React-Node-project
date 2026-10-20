import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./MobilePages/LoginPage";
import MobileList from "./MobilePages/MobileList";
import AddMobile from "./MobilePages/AddMobile"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          Login Page
        </Route>
        <Route path="/mobilelist" element={<MobileList />}>
          Mobile List
        </Route>
        <Route path="/addmobile" element={<AddMobile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
