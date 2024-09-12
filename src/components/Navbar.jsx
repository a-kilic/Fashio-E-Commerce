const Navbar = () => {
  return (
    <nav className="mx-auto">
      {/* Top navbar part */}
      <div className="flex items-center justify-between pt-2 pb-2 mx-auto sm:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex pl-2 space-x-1 logo">
          <i className="text-3xl fa-solid fa-shirt"></i>
          <h2 className="text-3xl font-medium">Fashio</h2>
        </div>
        <div className="pr-2 space-x-2 navbar-icon-container">
          <button className="nav-icon">
            <i className="text-2xl fa-regular fa-user"></i>
          </button>
          <button className="nav-icon" title="Wish list">
            <i className="text-2xl fa-regular fa-heart"></i>
          </button>
          <button className="nav-icon" title="Shopping Cart">
            <i className="text-2xl fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      {/* Bottom navbar part */}
      <div className="mx-auto sm:max-w-5xl lg:max-w-5xl xl:max-w-6xl">
        <form className="flex flex-grow">
          <ul className="items-center hidden pl-2 pr-2 lg:flex lg:space-x-4">
            <a href="#">
              <li className="font-medium hover:underline">Men</li>
            </a>
            <a href="#">
              <li className="font-medium hover:underline">Woman</li>
            </a>
            <a href="#">
              <li className="font-medium hover:underline">Jewelery</li>
            </a>
          </ul>
          <button
            className="bg-white border-t border-b border-r lg:hidden"
            title="Open Menu"
          >
            <i className="pl-2 pr-2 text-3xl fa-solid fa-bars"></i>
          </button>
          <input
            type="search"
            placeholder="Search"
            className="w-full p-3 border-t border-b border-l outline-none lg:w-auto lg:ml-auto"
          />
          <button className="pr-2 border-t border-b border-r" title="Search">
            <i className="text-2xl fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
