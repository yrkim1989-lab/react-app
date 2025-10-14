import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Basic";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
