import Images from "../elements/images-hero/images";

let Hero = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-100" id="home">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl text-center mb-8">
          I no longer have to sniff other dogs for love. I have found the
          hottest Corgi on TinDog. Woof.
        </h2>
        <img
          src="./images/dog-img.jpg"
          alt="dogImages"
          className="rounded-full mx-auto mb-3 h-96"
        />
        <p className="text-center mb-12">Pebbles, New York</p>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap items-center justify-center">
          <Images
            img="../../public/images/techcrunch.png"
            alt="techcrunch.png"
          />
          <Images img="../../public/images/mashable.png" alt="mashable.png" />
          <Images
            img="../../public/images/bizinsider.png"
            alt="bizinsider.png"
          />
          <Images img="../../public/images/tnw.png" alt="tnw.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
