import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://byte-cafe.onrender.com/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data), setLoading(false));
  }, []);
  return [menu, loading];
};

export default UseMenu;
