import backgroundImg from "../images/eosMens2.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h2 className="col-7 mx-3 text-end">DDTEN LLC</h2>
        <img
          alt="Phenolic Stalls finished"
          src={backgroundImg}
          className="max-width= 100px height: 50px"
        />
        <h3>Quality and Pricing that is unforgettable</h3>
        <p>
          Our commitment since inception is to provide customers with the best
          quality installation within a timely manner. We pride ourselves on our
          customer service and put that at the highest priority.
        </p>
        <h3></h3>
        <p className="fw-semibold p-4">
          Here at DDTEN LLC we supply and install Division 10 construction
          materials throughout the state of Florida. We are based in central
          Florida but regularly travel throughout the state. We specialize in
          commercial projects and invite new customers to send a big request.
          Our estimating department prides themselves on their attention to
          detail. We can provide any quote needed whether is be a large or small
          project. We can answer any questions you have regarding toilet
          partitions, toilet accessories, lockers and fire extinguishers. We are
          one of the largest growing Division 10 companies in Florida whether
          you need your products simply delivered or installed in a timely
          manner to meet deadlines.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Home;
