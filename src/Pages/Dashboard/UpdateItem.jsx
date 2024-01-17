import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const UpdateItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const item = useLoaderData();
  const { _id, name, supplierName, category, price, picture } = item;

  const handelForm = (event) => {
    // const [item, setItem] = useState([]);
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const category = from.category.value;
    const supplierName = from.supplierName.value;
    const price = from.price.value;
    const photo = from.photo.value;
    const items = { name, category, supplierName, price, photo };
    console.log(items);
    from.reset();

    //send data to the server
    axiosSecure.put(`/items/${_id}`, items).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Food Updated Successfully",
          icon: "Success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  return (
    <div className=" py-48 bg-slate-900">
      <div className="container">
        <h2 className="text-4xl text-center font-semibold text-black">
          Add New Food {name}
        </h2>
        <form onSubmit={handelForm}>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-5  font-semibold text-xl py-8">
            <div>
              <p className="text-white">Item Name</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                placeholder="Enter Item name"
              />
            </div>
            <div>
              <p className="text-white">Category</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="category"
                id="category"
                defaultValue={category}
                placeholder="Category"
              />
            </div>
            <div>
              <p className="text-white">Supplier Name</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="supplierName"
                id="supplierName"
                defaultValue={supplierName}
                placeholder="Supplier"
              />
            </div>
            <div>
              <p className="text-white">Price</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="price"
                defaultValue={price}
                id="price"
                placeholder="$ 00"
              />
            </div>
          </div>
          <div className="mx-5">
            <p className="text-white font-semibold text-xl">Image URL</p>
            <input
              className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4 "
              type="url"
              name="photo"
              id="photo"
              defaultValue={picture}
              placeholder="Photo"
            />
          </div>
          <div className="text-center">
            <button
              className="text-white  text-xl bg-orange-600 px-3 py-2 mt-12 rounded-lg font-semibold hover:bg-orange-700"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      {/* <p>{item.email}</p> */}
    </div>
  );
};

export default UpdateItem;

// const itemsLoaded = useLoaderData();
// const [items, setItems] = useState(itemsLoaded);

// const handelDelete = (_id) => {
//   fetch(`//localhost:5000/item/${_id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       if (data.deletedCount > 0) {
//         alert("Deleted Successfully");
//         const remaining = items.filter((item) => item._id !== _id);
//         setItems(remaining);
//       }
//     });
// };
