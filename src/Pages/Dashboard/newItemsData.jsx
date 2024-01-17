import { useQuery } from "@tanstack/react-query";

const newItemsData = () => {
  const {
    data: items = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/items");
      console.log(res);
      return res.json();
    },
  });

  return [items, loading, refetch];
};

export default newItemsData;
