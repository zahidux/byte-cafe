import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Chef from "./Chef";

const ExpertChef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://byte-cafe.onrender.com/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <section className="my-12 ">
      <div className="flex justify-center text-center">
        <SectionTitle
          subHeading={"Team of Restaurant"}
          Heading={"Our Expertise Chef"}
        />
      </div>
      <div
        data-aos="fade-up"
        className="container grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {chefs.map((chef) => (
          <Chef key={chef._id} chef={chef} />
        ))}
      </div>
    </section>
  );
};

export default ExpertChef;
