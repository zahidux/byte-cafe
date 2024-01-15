import FoodCard from "./FoodCard";

const TabItems = ({ items }) => {
  return (
    <div className="container grid md:grid-cols-3 gap-10 text-center">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default TabItems;
