let HomePage = () => {
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
          <img
            src="../../public/images/techcrunch.png"
            alt="techcrunch.png"
            className="mb-12 lg:mr-4"
          />
          <img
            src="../../public/images/mashable.png"
            alt="mashable.png"
            className="mb-12 lg:mx-4"
          />
          <img
            src="../../public/images/bizinsider.png"
            alt="BussinesInder.png"
            className="mb-12 lg:mx-4"
          />
          <img
            src="../../public/images/tnw.png"
            alt="tnw.png"
            height="30px"
            className="mb-12 lg:ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
