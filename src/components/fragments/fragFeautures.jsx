import ListFeatures from "../elements/listFeatures/features";

let FragFeatures = () => {
  return (
    <div className="flex justify-between">
      <ListFeatures
        title="Easy to use."
        description="So easy to use, even your dog could do it."
      />
      <ListFeatures
        title="Elite Clientele."
        description="We have all the dogs, the greatest dogs."
      />
      <ListFeatures
        title="Guaranteed to work."
        description="Find the love of your dog's life or your money back."
      />
    </div>
  );
};

export default FragFeatures;
