const Footer = () => {
  return (
    <section className="bg-gray-950">
      <div className="mx-auto sm:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
        <div className="grid pt-5 pb-20 md:grid-cols-3">
          {/* Company Details */}
          <div className="px-4 py-8">
            <a href="#" className="text-3xl font-medium text-white">
              <i className="text-3xl fa-solid fa-shirt"></i> Fashio
            </a>
            <p className="pt-3 text-white/70 lg:pr-24">
              Fashio is an online shop offering trendy men's and women's
              clothing, plus stylish jewelry at affordable prices.
            </p>
          </div>
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            {/* Quick Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 font-bold text-white sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    Woman
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    Jewelery
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 font-bold text-white sm:text-left">
                Contact
              </h1>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:adk_05@outlook.com"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/a-kilic/"
                    target="_blank"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/a-kilic/Fashio-E-Commerce"
                    target="_blank"
                    className="text-gray-400 duration-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            {/* Address and Phone Number */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 font-bold text-white sm:text-left">
                Address
              </h1>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <i className="mr-2 fa-solid fa-location-dot"></i>123 Maplewood
                  Avenue
                </li>
                <li className="text-gray-400">
                  <i className="mr-2 fa-solid fa-phone"></i>(555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
