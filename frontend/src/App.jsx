import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import ImageGallery from "./pages/Gallery/ImageGallery.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
