import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    signUp(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        profileUpdate(name)
          .then((result) => {
            const saveUser = { name: name, email: email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  form.reset();
                  navigate("/");
                  Swal.fire("User Created");
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });

    //password validation
    if (password < 6) {
      alert("the password is less then 6 ");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }
  };
  return (
    <section className=" flex flex-col items-center justify-center py-10 bg-slate-700">
      <div className="container w-full md:w-[450px] bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl text-slate-800 font-bold text-center mb-3">
          Sign Up
        </h2>
        <form onSubmit={handelSubmit}>
          <div className=" shadow-sm flex flex-col gap-4">
            <p className="text-lg font-medium text-slate-900">Name :</p>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="py-2 pl-2 rounded-lg outline-orange-400 bg-slate-100 "
            />
            <p className="text-lg font-medium text-slate-900">Email :</p>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="py-2 pl-2 rounded-lg outline-orange-400 bg-slate-100 "
            />
            <p className="text-lg font-medium text-slate-900 ">Password :</p>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="py-2 pl-2 rounded-lg outline-orange-400 bg-slate-100"
            />
            <p className="text-lg font-medium text-slate-900 ">
              Confirm Password :
            </p>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm Password"
              className="py-2 pl-2 rounded-lg outline-orange-400 bg-slate-100"
            />
          </div>
          <div className="text-center ">
            <button className="mt-4 text-2xl bg-orange-400 py-2 rounded-lg w-full text-white font-semibold shadow-2xl hover:bg-orange-700">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex gap-5 items-center my-6">
          <span className="border-b  w-full ml-8 text-slate-400"></span>
          <p>OR</p>
          <span className="border-b  w-full mr-8 text-slate-400 "></span>
        </div>

        <p className="text-center mt-5 text-zinc-700">
          <Link to={"/login"}> Already have an account!! Login </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
