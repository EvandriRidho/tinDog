let Btn = (props) => {
  const { title } = props;
  return (
    <button className="bg-black text-white py-2 px-8 rounded-lg mx-4 hover:text-slate-700 hover:bg-white">
      {title}
    </button>
  );
};

export default Btn;
