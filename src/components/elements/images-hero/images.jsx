let Images = (props) => {
  const { img, alt } = props;
  return <img src={img} alt={alt} className="mb-12 lg:mr-4" />;
};

export default Images;
