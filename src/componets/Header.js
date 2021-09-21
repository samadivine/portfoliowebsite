const Header = () => {
  return (
    <header className="bg-blue-100 sticky top-0 z-50">
      <div className="  flex justify-between mx-4 py-4 items-center lg:max-w-7xl lg:mx-auto">
        <div>
          <h2 className="font-bold text-3xl">SAMA</h2>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="px-3 font-semibold text-2xl">
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fas fa-search cursor-pointer font-semibold text-2xl"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
