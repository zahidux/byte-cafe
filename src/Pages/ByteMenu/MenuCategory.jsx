import { Link } from "react-router-dom";
import MenuCover from "./MenuCover";
import MenuCart from "./MenuCart";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div>
      {title && <MenuCover img={image} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center mb-14">
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-black text-xl">
            Order Your Favourite Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
