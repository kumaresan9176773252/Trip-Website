import "./styles.css";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
