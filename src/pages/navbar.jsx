let Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-28 bg-gradient-to-r from-red-500 to-blue-400">
      <h1 className="px-8 text-3xl cursor-pointer hover:text-white hover:underline">
        Tin<span className="font-bold">Dog</span>
      </h1>
      <div className="px-2 space-x-4">
        <a
          href="#home"
          className="text-lg font-bold hover:text-white hover:underline"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-lg font-bold hover:text-white hover:underline"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-lg font-bold hover:text-white hover:underline"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="text-lg font-bold hover:text-white hover:underline"
        >
          Contact
        </a>
      </div>
      <div className="px-8">
        <button className="bg-black text-white py-2 px-8 rounded-lg mx-4 hover:text-slate-700 hover:bg-white">
          Login
        </button>
        <button className="bg-black text-white py-2 px-6 rounded-lg mx-4 hover:text-slate-700 hover:bg-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
