import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import NowShowing from "./pages/Home/NowShowing";
import MovieSelecting from "./pages/Home/Booking/MovieSelecting";
import SeatBooking from "./pages/Home/Booking/SeatBooking";
import Payment from "./pages/Home/Booking/Payment";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import SendOTP from "./pages/Auth/SendOTP";
import NewPassword from "./pages/Auth/NewPassword";
import ComingSoon from "./pages/Home/ComingSoon";
import Theaters from "./pages/Home/Theaters";
import AboutUs from "./pages/Footer/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<NowShowing />} />
        <Route path="/movie-selecting" element={<MovieSelecting />} />
        <Route path="/seat-booking" element={<SeatBooking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/now-showing" element={<NowShowing />} />
        <Route path="/theaters" element={<Theaters />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;