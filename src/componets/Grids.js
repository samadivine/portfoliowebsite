import food from "../images/image-restaurant.jpg";
import grid1 from "../images/image-currency.jpg";
function Grids() {
  return (
    <section className="mb-10 md:grid grid-cols-2 max-w-7xl mx-auto ">
      <div className="relative">
        <img src={grid1} alt="" />
        <h2 className="absolute inset-x-0 bottom-20 text-white font-bold text-2xl ">
          A Start Guide To Self Improvement
        </h2>
        <button className="absolute  bottom-0 right-0 lg:buttom-40 lg:right-40 bg-white py-4 px-8 hover:bg-gray-300">
          See More
          <i className="fas fa-arrow-right pl-4 "></i>
        </button>
      </div>
      <div className="relative mt-4">
        <img src={food} alt="" />
        <button className="absolute top-0 left-0 bg-white py-4 px-8 hover:bg-gray-300">
          See More
          <i className="fas fa-arrow-right pl-4 "></i>
        </button>
        <i className="absolute top-44 left-40 text-white text-7xl  far fa-play-circle"></i>
      </div>
    </section>
  );
}

export default Grids;
