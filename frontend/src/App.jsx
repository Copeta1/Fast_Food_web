import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/Profile/Profile";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/ContactUs/ContactUs";
import ImageGallery from "./pages/Gallery/ImageGallery";
import AboutUs from "./pages/AboutUs/AboutUs";
import Admin from "./pages/Admin/Admin";
import ProtectedRoute from "./context/ProtectedRoute";
import Checkout from "./components/Checkout/Checkout";

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
