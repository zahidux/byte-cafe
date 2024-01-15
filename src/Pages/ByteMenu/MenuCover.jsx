import { Parallax } from "react-parallax";

const MenuCover = ({ img, title }) => {
  return (
    <Parallax
      className="rounded-md"
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className=" h-[500px]">
        <div className="flex justify-center items-center">
          <div className="bg-slate-900 bg-opacity-40 p-32 mt-12 text-white text-center">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
