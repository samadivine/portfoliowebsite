function Footer() {
  return (
    <footer className="flex justify-evenly m-10">
      <div className="grid grid-rows-2 ">
        <div>
          <h1>SAMA</h1>
        </div>
        <div>
          <p>&copy; Copyright all right reserve 2021</p>
        </div>
      </div>

      <div className="grid grid-rows-2">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="text-center">
          <i className="text-2xl px-2 fab fa-facebook"></i>
          <i className="text-2xl px-2 fab fa-twitter"></i>
          <i className="text-2xl px-2 fab fa-whatsapp"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
