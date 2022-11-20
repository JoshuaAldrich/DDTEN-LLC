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
          <h3 className="fs-3">&copy DDTEN LLC</h3>

          <div className="fs-6 text-decoration-none">
            <p>
              <a href="tel:407.790.4074">(407)-790-4074</a>
            </p>
            <p>
              <a href="mailto:customerserviceddten@gmail.com">
                customerserviceddten@gmail.com
              </a>
            </p>
            <p>
              <a>1495 Seminola Blvd Ste 1023, Casselberry, FL 32707</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default App;
