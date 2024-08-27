import HeroImg from "../assets/woman-with-jewelery.jpg";

const Hero = () => {
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
          {/* Image */}
          <div className="flex justify-center img-wrapper md:w-2/3">
            <img src={HeroImg} className="object-cover w-full h-full" />
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
