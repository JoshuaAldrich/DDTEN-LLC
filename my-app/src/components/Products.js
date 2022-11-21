import classes from "../styles/products.module.css";
import bobrickCombo from "../images/bobrickCombo.jpg";
import bobrickGb from "../images/bobrickGb.jpg";
import bobrickMirror from "../images/bobrickMirror.jpg";
import bobrickSoap from "../images/bobrickSoap.jpg";
import bobrickTp from "../images/bobrickTp.jpg";
import bobrickHanddryer from "../images/bobrickHanddryer.jpg";
import bobrickFeminine from "../images/bobrickFeminine.jpg";
import kbBaby from "../images/kbBabyChanging.png";

const Products = () => {
  const products = [
    {
      name: "Bobrick",
      description: "Towel Dispenser/Waste Receptacle",
      image: bobrickCombo,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Grab Bars",
      image: bobrickGb,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Soap Dispenser",
      image: bobrickSoap,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Toilet Paper Dispenser",
      image: bobrickTp,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Channel-Frame Mirror",
      image: bobrickMirror,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Feminine Napkin Disposal",
      image: bobrickFeminine,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Hand Dryers",
      image: bobrickHanddryer,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Koala Bear",
      description: "Koala Bear Baby Changing",
      image: kbBaby,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
  ];

  const partition = [
    {
      name: "Bobrick",
      description: "Feminine napkin Disposal",
      image: bobrickMirror,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Feminine napkin Disposal",
      image: bobrickMirror,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
    {
      name: "Bobrick",
      description: "Feminine napkin Disposal",
      image: bobrickMirror,
      link: "https://www.bobrick.com/products/washroom-accessories/restroom-accessories-catalog/combination-towel-waste-units/product/b-3979/",
    },
  ];
  return (
    <>
      <h2 className="text-center p-3">Bobrick Accessories</h2>
      <div className={classes.product}>
        {products.map((product) => {
          return (
            <div className={classes.product}>
              <p>{product.description}</p>
              <a href={product.link} target="_blank">
                <img src={product.image} />
              </a>
            </div>
          );
        })}
      </div>
      <h2 className="text-center p-3">Bobrick Partitions</h2>
      <div className={classes.partition}>
        {partition.map((partition) => {
          return (
            <div className={classes.partition}>
              <h3>{partition.name}</h3>
              <p>{partition.description}</p>
              <a href={partition.link} target="_blank">
                <img src={partition.image} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
