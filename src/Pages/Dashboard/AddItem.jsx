import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BsCamera } from "react-icons/bs";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
// console.log(img_hosting_token);

const AddItem = () => {
  const { user, profileUpdate, setLoading } = useContext(AuthContext);
  // const [axiosSecure] = useAxiosSecure();
  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=YOUR_CLIENT_API_KEY=${img_hosting_token}`;
  const [picLoading, setPicLoading] = useState(false);
  const [picture, setPicture] = useState(null);
  console.log(picture);

  const [axiosSecure] = useAxiosSecure();

  const handelForm = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const category = from.category.value;
    const supplierName = from.supplierName.value;
    const price = from.price.value;
    const items = {
      name,
      photo: picture,
      category,
      supplierName,
      price: parseFloat(price),
    };
    console.log(items);
    from.reset();
    axiosSecure.post("/items", items).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Food Updated Successfully",
          icon: "Success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  //   Picture upload
  const handlePictureUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    // console.log(picture);
    try {
      setPicLoading(true);
      const response = await axios.post(image_hosting_url, formData);
      if (response.data.data.display_url) {
        setPicture(response.data.data.display_url);

        // axiosSecure
        //   .put(`/items/${user.email}?photo=${response.data.data.display_url}`)
        //   .then((res) => {
        //     if (res.data.modifiedCount === 1) {
        //       Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Photo Uploaded!",
        //         showConfirmButton: false,
        //         timer: 1500,
        //       });
        //       setPicLoading(false);
        //     }
        //   });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setPicLoading(false);
    }
  };
  return (
    <div className="py-28 px-16  bg-slate-700">
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

            <div className="mb-4">
              <label
                htmlFor="category"
                className="text-lg font-medium  text-white"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="px-2 py-2 mt-3 w-full  rounded-xl text-lg outline-orange-500 border-0 text-slate-500"
                required
              >
                <option value="">Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                {/* Add more categories as needed */}
              </select>
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
          {/* Upload your picture */}
          <div className="mt-6 absolute md:static right-0 bottom-0">
            <input
              id="picture"
              name="picture"
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
              className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <button
              type="button"
              onClick={() => document.getElementById("picture").click()}
              className="btn__primary_s w-full mt-6 justify-around"
            >
              Upload Photo
              <BsCamera size="30" />
            </button>
          </div>

          <div className="text-center">
            <button
              className="text-white  text-xl bg-orange-600 px-2 py-2 mt-12 rounded-lg font-semibold hover:bg-orange-700"
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
