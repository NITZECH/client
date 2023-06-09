import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Login from "./components/login";
import Signup from "./components/signup";
import Skill from "./components/skill";
import Faq from "./components/faq";
import CompanySignup from "./components/companySignup";
import CompanyLogin from "./components/companyLogin";
import Postjob from "./components/postJob";
import Sitemap from "./components/sitemap";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/companysignup" element={<CompanySignup />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/postJob" element={<Postjob />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
