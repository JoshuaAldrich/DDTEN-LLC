import ddTen from "../images/DDTEN.png";

const About = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src={ddTen}
          alt="DDTEN Image"
          className="col-4 img-fluid max-width: 50% height:auto"
        />
        <h2 className="col-7 mx-3 text-end">DDTEN LLC</h2>
        <p className="fw-semibold p-4">
          Hello my name is Joshua Aldrich. I have had a passion for coding ever
          since I started my college degree. I ended up taking a break to focus
          on working for a couple years but decided to get back into it once I
          saved enough to join the UCF coding bootcamp. I have constantly
          watched videos on youtube and the passion for coding hasn't left so
          I'm glad to take this opportunity to make coding a career path. I
          really enjoy the journey of constantly learning which I've been able
          to embark on with this course I'm currently taking.
        </p>
      </div>
    </div>
  );
};

export default About;
