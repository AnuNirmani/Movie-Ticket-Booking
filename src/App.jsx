import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./FrondEnd/pages/Auth/login";
import Signup from "./FrondEnd/pages/Auth/Signup";
import Home from "./FrondEnd/pages/Home/Home";
import NowShowing from "./FrondEnd/pages/Home/NowShowing";
import MovieSelecting from "./FrondEnd/pages/Home/Booking/MovieSelecting";
import SeatBooking from "./FrondEnd/pages/Home/Booking/SeatBooking";
import Payment from "./FrondEnd/pages/Home/Booking/Payment";
import ForgotPassword from "./FrondEnd/pages/Auth/ForgotPassword";
import SendOTP from "./FrondEnd/pages/Auth/SendOTP";
import NewPassword from "./FrondEnd/pages/Auth/NewPassword";
import ComingSoon from "./FrondEnd/pages/Home/ComingSoon";
import Theaters from "./FrondEnd/pages/Home/Theaters";
import AboutUs from "./FrondEnd/pages/Footer/AboutUs";
import TermsAndConditions from "./FrondEnd/pages/Footer/TermsAndConditions";
import ContactUs from "./FrondEnd/pages/Footer/ContactUs";
import Advertisements from "./FrondEnd/pages/Footer/Advertisements";
import Deals from "./FrondEnd/pages/Home/Deals";

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
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;