import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


import './index.css'

const App = () => {

  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

          <Route
            path="/contacto"
            element={<Contact />}
          /> 

          <Route
            path="*"
            element={<NotFound />}
          /> 
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
