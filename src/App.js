import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Single from "./pages/singleblog";
import Login from "./pages/login";
import Register from "./pages/signup";
import Admin from "./pages/AdminDashboard";
import Adminx from "./pages/Admin";
import Graph from "./pages/charts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/singleblog/:_id" element={<Single />} />
        <Route path="AdminDashboard" element={<Admin />} />
        <Route path="/Admin" element={<Adminx />} />
        <Route path="/charts" element={<Graph />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
