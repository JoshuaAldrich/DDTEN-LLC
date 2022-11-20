import phenolicImg from "../images/eosMens.jpg";
import hdpeImg from "../images/HDPE2.jpg";
import aloricaImg from "../images/aloricaFP.jpg";
import mirrorImg from "../images/mirrorhanddryer.jpg";
import fillerImg from "../images/alorica1.jpg";
import filler2Img from "../images/alorica2.jpg";
import classes from "../styles/projects.module.css";

function Projects() {
  const projects = [
    {
      name: "Phenolic Partitions",
      description: "ASI provides great stalls for shower usage",
      image: phenolicImg,
      link: "https://asi-globalpartitions.com/products/black-core-phenolic/",
    },
    {
      name: "Solid Plastic (HDPE)",
      description: "Long lasting plastic with a nice finish",
      image: hdpeImg,
      link: "https://asi-globalpartitions.com/products/solid-plastic-hdpe/",
    },
    {
      name: "Plastic laminate partitions",
      description:
        "ASI provides more affordable options like this wood-filled partition",
      image: aloricaImg,
      link: "https://asi-globalpartitions.com/products/plastic-laminate-moisture-guard/",
    },
    {
      name: "Custom Mirrors and Hair Dryers",
      description: "No matter the application we can get what you need",
      image: mirrorImg,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories/mirrors/",
    },
    {
      name: "Filler 1",
      description: "Filler text",
      image: fillerImg,
      link: "http://www.am-sanitary-partition.com/",
    },
    {
      name: "Filler 2",
      description: "Filler text",
      image: filler2Img,
      link: "http://www.am-sanitary-partition.com/",
    },
  ];

  return (
    <>
      <h2 className="text-center p-3">Projects</h2>
      <div className={classes.projects}>
        {projects.map((project) => {
          return (
            <div className={classes.project}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <img src={project.image} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
