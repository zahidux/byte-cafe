import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddItem = () => {
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
    // console.log(items);
    from.reset();

    //send data to the server
    fetch("https://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="py-28 px-16 bg-slate-700">
      <div className="">
        <h2 className="text-4xl text-center font-semibold text-white">
          Add New Food
        </h2>
        <form onSubmit={handelForm}>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  font-semibold text-xl py-8">
            <div>
              <p className="text-white">Item Name</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="name"
                id="name"
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
                placeholder="Supplier"
              />
            </div>
            <div>
              <p className="text-white">Price</p>
              <input
                className="w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4"
                type="text"
                name="price"
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
              placeholder="Photo"
            />
          </div>
          <div className="text-center">
            <button
              className="text-white  text-xl bg-orange-600 px-3 py-2 mt-12 rounded-lg font-semibold hover:bg-orange-700"
              type="submit"
            >
              Add New
            </button>
          </div>
        </form>
      </div>
      {/* <p>{item.email}</p> */}
    </div>
  );
};

export default AddItem;
