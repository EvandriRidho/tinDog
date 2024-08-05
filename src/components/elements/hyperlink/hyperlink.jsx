let HyperLink = (props) => {
  const { title, href } = props;
  return (
    <a
      href={href}
      className={`text-lg font-bold hover:text-white hover:underline`}
    >
      {title}
    </a>
  );
};

export default HyperLink;
