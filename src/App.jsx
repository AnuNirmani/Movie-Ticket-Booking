import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SendOTP from "./pages/SendOTP";
import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
