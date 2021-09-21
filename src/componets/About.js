import profileImage from "../images/image-restaurant.jpg";
function About() {
  return (
    <section className="m-10 max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-5">
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="text-left px-4">
            <h2 className="font-bold">Sama Divine</h2>
            <p>Lorem ipsum dolor.</p>
          </div>
          <div>
            <img src={profileImage} alt="" className="w-12 h-12 rounded-full" />
          </div>
        </div>
        <div className="text-center my-5">
          <q className="text-4xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae
            facere eum repellat quas ullam!
          </q>
        </div>
      </div>

      <div className="grid grid-rows-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          tenetur ut quidem tempore, maiores sunt repellendus iusto, molestias
          commodi beatae id in fugiat velit architecto debitis itaque doloremque
          culpa libero!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor
          tempore distinctio molestiae voluptates saepe quis iste illum
          reiciendis in!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatem placeat itaque dignissimos cumque eum?
        </p>
      </div>
    </section>
  );
}

export default About;
