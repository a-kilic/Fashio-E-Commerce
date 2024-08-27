import HeroImg from "../assets/bags.jpg";

const Hero = () => {
  return (
    // Background full width with fixed height
    <section className="bg-orange-500 hero-section">
      {/* Hero Container */}
      <div className="flex h-full mx-auto pt-9 sm:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
        {/* Hero Images */}
        <img src={HeroImg} className="h-full ml-4 hero-img" />
        {/* Container Right side */}
        <div className="flex flex-col justify-between w-full h-full">
          {/* Icons and Hero Text */}
          <div className="flex flex-col justify-start ml-5">
            <div className="mb-2 space-x-3">
              <i
                className="text-5xl fa-regular fa-credit-card"
                title="Card"
              ></i>
              <i
                className="text-5xl fa-brands fa-amazon-pay"
                title="Amazon-Pay"
              ></i>
              <i className="text-5xl fa-brands fa-paypal" title="PayPal"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Easy ways to pay</h1>
              <h1 className="text-3xl">More choices, less chore</h1>
            </div>
          </div>
          {/* Question and Buttons */}
          <div className="flex flex-col mb-10 ml-5">
            <h2 className="flex justify-start mb-2 text-sm font-bold">
              Where would you like to start?
            </h2>
            <div className="flex">
              <button className="w-full p-4 mr-2 text-sm font-bold text-white bg-black hover:bg-opacity-80">
                Woman
              </button>
              <button className="w-full p-4 mr-2 text-sm font-bold text-white bg-black hover:bg-opacity-80">
                Men
              </button>
              <button className="w-full p-4 text-sm font-bold text-white bg-black hover:bg-opacity-80">
                Jewelery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
