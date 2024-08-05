import Btn from "../elements/button/button";
import HyperLink from "../elements/hyperlink/hyperlink";

let Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-32 bg-gradient-to-r from-red-500 to-blue-400">
      <h1 className="px-8 text-3xl cursor-pointer hover:text-white hover:underline mr-44">
        Tin<span className="font-bold">Dog</span>
      </h1>
      <div className="px-2 space-x-4">
        <HyperLink title="Home" href="#home" />
        <HyperLink title="Features" href="#features" />
        <HyperLink title="Pricing" href="#pricing" />
        <HyperLink title="Contact" href="#contact" />
      </div>
      <div className="px-8">
        <Btn title="Login" />
        <Btn title="Sign Up" />
      </div>
    </nav>
  );
};

export default Navbar;
