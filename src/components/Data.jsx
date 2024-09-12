import HeroImg1 from "../assets/woman-with-flowers.jpg";
import HeroImg2 from "../assets/woman-throwing-hair.jpg";
import HeroImg3 from "../assets/man-sitting-blue.jpg";
import HeroImg4 from "../assets/jewelery.jpg";

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
  {
    id: 1,
    img: HeroImg1,
    alt: "Woman with flowers on head",
    caption: "Seamless payments, zero hassle",
    "background-color": "bg-orange-500",
    icons: ["fa-credit-card", "fa-cart-shopping", "fa-money-bill-1"],
  },
  {
    id: 2,
    img: HeroImg2,
    alt: "Woman throwing her hair around",
    caption: "Modern Classics for the Modern Woman",
    "background-color": "bg-green-500",
    icons: ["fa-chess-queen", "fa-venus", "fa-eye"],
  },
  {
    id: 3,
    img: HeroImg3,
    alt: "Man sitting on a chair",
    caption: "Redefine Classic Menswear",
    "background-color": "bg-blue-500",
    icons: ["fa-mars", "fa-crown", "fa-face-smile-wink"],
  },
  {
    id: 4,
    img: HeroImg4,
    alt: "Jewelery",
    caption: "Your Story, Told in Gold",
    "background-color": "bg-yellow-500",
    icons: ["fa-gem", "fa-ring", "fa-star"],
  },
];

console.log(heroData);
