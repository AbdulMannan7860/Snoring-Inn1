import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import Home from "./components/home/Home.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import PortalPage from "./pages/Login/PortalPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import TestimomialPage from "./pages/TestimonialPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import RoomPage from "./pages/RoomPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/animate.css";
import "./App.css";

import AuthState from "./Context/Auth Context/Auth.State.jsx";
import HotelState from "./Context/Hotel Context/Hotel.state.jsx";

function AppContent({ auth }) {
  const location = useLocation();

  const hideNavbarPaths = [
    '/login',
    '/portal',
  ];

  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={auth ? <Navigate to="/portal" /> : <LoginPage auth={auth} />} />
        <Route path='/portal' element={auth ? <PortalPage /> : <Navigate to="/login" />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimomialPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}
export default function App() {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(token);
  return (
    <AuthState setAuth={setAuth}>
      <HotelState>
        <Router>
          <AppContent auth={auth} />
        </Router>
        <Toaster />
      </HotelState>
    </AuthState>
  );
}
