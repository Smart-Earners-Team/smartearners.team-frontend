import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className=" sticky top-0 z-[999]">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
