import UseMenu from "../Components/UseMenu";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import MenuCover from "./MenuCover";

import menuImg from "../../assets/menu/menu.jpg";
import dessertImg from "../../assets/menu/dessert.jpeg";
import saladImg from "../../assets/menu/salad.jpg";
import pizzaImg from "../../assets/menu/pizza.jpg";
import soupImg from "../../assets/menu/soup.jpg";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="container py-28">
      <MenuCover img={menuImg} title="our menu" />
      <div className="flex justify-center text-center mt-12">
        <SectionTitle Heading="TODAY'S OFFER" subHeading={"---Don't miss---"} />
      </div>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title="desserts"
        image={dessertImg}
      ></MenuCategory>
      <MenuCategory items={soup} title={"soup"} image={soupImg}></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        image={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        image={pizzaImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
