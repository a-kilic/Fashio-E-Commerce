import HeroImg1 from "../assets/bags.jpg";
import HeroImg2 from "../assets/man-in-jacket.jpg";
import HeroImg3 from "../assets/woman-with-jewelery.jpg";
// Fetch All Products
const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

// Hero Data

export const heroData = [
  { id: 1, img: HeroImg1, name: "Woman with shopping bags" },
  { id: 2, img: HeroImg2, name: "Man in a Jacket" },
  { id: 3, img: HeroImg3, name: "Woman wearing jewelery" },
];

console.log(heroData);
