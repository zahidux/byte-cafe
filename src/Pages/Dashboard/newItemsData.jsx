import { useQuery } from "@tanstack/react-query";

const newItemsData = () => {
  const {
    data: items = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("https://byte-cafe.onrender.com/items");
      console.log(res);
      return res.json();
    },
  });

  return [items, loading, refetch];
};

export default newItemsData;
