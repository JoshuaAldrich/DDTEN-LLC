import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />

      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <article>
        <div className="mx-auto text-center">
          <h3 className="fs-3">
            <span>©</span> DDTEN LLC
          </h3>

          <div className="fs-6 text-decoration-none">
            <p>
              <a href="tel:407.790.4074">(407)-790-4074</a>
            </p>
            <p>
              <a href="mailto:customerserviceddten@gmail.com">
                customerserviceddten@gmail.com
              </a>
            </p>
            <p>1495 Seminola Blvd Ste 1023, Casselberry, FL 32707</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default App;
