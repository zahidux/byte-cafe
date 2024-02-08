import { Link } from "react-router-dom";
import MenuCover from "./MenuCover";
import MenuCart from "./MenuCart";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div data-aos="fade-up">
      {title && <MenuCover img={image} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center mb-14">
          <button
            className="text-orange-500 hover:text-white shadow-lg border-0 border-b-4 hover:shadow-orange-700 text-sm md:text-xl py-2 md:py-2 px-2 md:px-3 rounded-xl 
          md:mt-6 font-medium hover:bg-orange-500"
          >
            Order Your Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
