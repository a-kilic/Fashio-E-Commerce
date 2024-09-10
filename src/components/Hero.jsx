import { useState } from "react";
import HeroImg from "../assets/woman-with-jewelery.jpg";
import { heroData } from "./Data";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % heroData.length);
  };

  const previousImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? heroData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-orange-500 hero-background">
      <div className="flex flex-col w-11/12 h-full mx-auto lg:w-full sm:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
        {/* Text and Buttons */}
        <div className="mt-5 mb-5">
          <h2 className="mb-1 font-bold text-center">
            Where would you like to start?
          </h2>
          <div className="flex">
            <button className="w-full p-2 mr-2 font-bold text-white bg-black">
              Men
            </button>
            <button className="w-full p-2 mr-2 font-bold text-white bg-black">
              Woman
            </button>
            <button className="w-full p-2 font-bold text-white bg-black">
              Jewelery
            </button>
          </div>
        </div>
        {/* Image and Icons/Caption Wrapper */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Image and Buttons*/}
          <div className="relative flex justify-center img-wrapper md:w-2/3">
            <div className="flex w-full h-full overflow-hidden">
              {heroData.map((image, id) => (
                <img
                  key={id}
                  src={image.img}
                  alt={image.name}
                  className="object-cover w-full h-full duration-300 ease-in-out shrink-0 grow-0 transition-translate"
                  style={{ translate: `${-100 * currentImage}%` }}
                />
              ))}
            </div>
            <button
              title="Previous"
              onClick={previousImage}
              className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-12 transition duration-100 ease-in-out bg-transparent hover:bg-black hover:bg-opacity-20"
            >
              <i className="absolute left-0 block p-2 text-3xl text-white fa-solid fa-arrow-left stroke img-slider-icon"></i>
            </button>
            <button
              title="Next"
              onClick={nextImage}
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 transition duration-100 ease-in-out bg-transparent hover:bg-black hover:bg-opacity-20"
            >
              <i className="absolute right-0 block p-2 text-3xl text-white fa-solid fa-arrow-right stroke img-slider-icon"></i>
            </button>
            <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-5 left-1/2">
              {heroData.map((_, id) => (
                <button
                  key={id}
                  onClick={() => setCurrentImage(id)}
                  className="text-black duration-100 ease-in-out hover:scale-110 transition-scale"
                >
                  {id === currentImage ? (
                    <i className="fa-solid fa-circle-dot icon-stroke"></i>
                  ) : (
                    <i className="fa-solid fa-circle icon-stroke"></i>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Icons and Caption */}
          <div className="flex flex-col justify-center mt-10 md:w-1/3 md:mt-0">
            <div className="flex justify-center space-x-4">
              <i
                className="text-5xl fa-regular fa-credit-card"
                title="Card"
              ></i>
              <i
                className="text-5xl fa-brands fa-amazon-pay"
                title="Amazon-Pay"
              ></i>
              <i
                className="text-5xl fa-regular fa-money-bill-1"
                title="Money Bill"
              ></i>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl md:text-4">
                Easy ways to pay
              </h1>
              <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl md:text-4">
                More choices, less chore
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
