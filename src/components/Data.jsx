import HeroImg1 from "../assets/woman-with-flowers.jpg";
import HeroImg2 from "../assets/woman-throwing-hair.jpg";
import HeroImg3 from "../assets/man-sitting-blue.jpg";
import HeroImg4 from "../assets/jewelery.jpg";
import Portrait1 from "../assets/portrait1.jpg";
import Portrait2 from "../assets/portrait2.jpg";
import Portrait3 from "../assets/portrait3.jpg";
import Portrait4 from "../assets/portrait4.jpg";

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
    caption: "Modern Classics for Her",
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

// Testimonials Data

export const TestimonialsData = [
  {
    id: 1,
    name: "Sophia M.",
    img: Portrait1,
    alt: "Portrait woman with glasses",
    text: "I’ve never felt more confident in my wardrobe! The quality and fit of these clothes are top-notch, and they always keep me on-trend. Highly recommend!",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Olivia T",
    img: Portrait2,
    alt: "Portrait woman with strawhat",
    text: "Shopping here has transformed my style. The pieces are both fashionable and comfortable, and the customer service is exceptional. I’m a loyal fan now!",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Michael B.",
    img: Portrait3,
    alt: "Portrait man with beard",
    text: "The craftsmanship is impressive. High-quality materials and precise stitching make for durable, stylish pieces. I'm thoroughly satisfied!",
    delay: 0.2,
  },
  {
    id: 4,
    name: "Ryan C.",
    img: Portrait4,
    alt: "Portrait man with cap",
    text: "The fit and design are superb. Modern tailoring and quality fabrics ensure both comfort and style. This brand is now my top choice!",
    delay: 0.2,
  },
];
