import profileImage from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import ReactTypingEffect from "react-typing-effect";
function Hero() {
  return (
    <section className="lg:text-center lg:pt-10">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:text-left">
        <div className="flex items-center justify-center my-10 ">
          <div className="text-left px-4">
            <h2 className="font-bold">Sama Divine</h2>
            <p>Lorem ipsum dolor.</p>
          </div>
          <div>
            <img src={profileImage} alt="" className="w-12 h-12 rounded-full" />
          </div>
        </div>

        <div className="m-10">
          <h2 className="text-3xl font-bold">
            Control Your Own Level Of{" "}
            {
              <>
                <ReactTypingEffect
                  text={[" Motivation.", " Inspiration!", " Imitation"]}
                />
              </>
            }
          </h2>
          <h5 className="text-gray-500 text-sm font-semibold">
            Author: Sama Divine
          </h5>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            mollitia possimus, aperiam quaerat similique voluptas reiciendis
            labore nesciunt maxime minus et architecto veritatis quibusdam
            eligendi unde quae nam expedita eaque? Veniam sint iusto eos numquam
            deserunt natus odio, rem consequuntur. Aperiam unde dignissimos
            reprehenderit possimus est esse a voluptate. Optio.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <img src={plane} className="md:w-full" alt="" />
      </div>
    </section>
  );
}

export default Hero;
