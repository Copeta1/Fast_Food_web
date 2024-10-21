import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/ContactUs/ContactUs";
import ImageGallery from "./pages/Gallery/ImageGallery";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
