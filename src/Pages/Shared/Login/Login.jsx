import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../assets/Google.png";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { googleSignIn, githubSignIn, facebookSignIn, singIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message, {
          position: "top-center",
          autoClose: 4000,
        });
      });
  };

  //google sign in
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://byte-cafe.onrender.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/");
          });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  //github sign in

  const handelGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //
  const handelFacebookSignIn = () => {
    facebookSignIn();
  };
  return (
    <section className=" flex flex-col items-center justify-center py-10 bg-slate-700">
      <div className="container w-full md:w-[450px] bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl text-slate-800 font-bold text-center mb-5">
          Please Login
        </h2>
        <form onSubmit={handelSubmit}>
          <div className=" rounded-md shadow-sm flex flex-col gap-4">
            <div>
              <p className="text-lg font-medium text-slate-900">Email :</p>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="py-2 pl-2 rounded-lg outline-orange-400 w-full bg-slate-100 "
              />
            </div>
            <div>
              <p className="text-lg font-medium text-slate-900 ">Password :</p>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="py-2 pl-2 rounded-lg outline-orange-400 w-full bg-slate-100"
              />
              <p>Forget password</p>
            </div>
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="mt-7 text-xl bg-orange-400 py-2 rounded-lg w-full text-white font-semibold shadow-2xl hover:bg-orange-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex gap-5 items-center my-6">
          <span className="border-b  w-full ml-8 text-slate-400"></span>
          <p>OR</p>
          <span className="border-b  w-full mr-8 text-slate-400 "></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5   ">
          <button
            onClick={handelGoogleSignIn}
            className="flex gap-1 shadow-xl rounded-lg p-3"
          >
            <img className="w-[25px]" src={google} alt="" /> Google
          </button>
          <button
            onClick={handelGithubSignIn}
            className="flex er gap-1 shadow-xl rounded-lg p-3"
          >
            <FaGithub className="text-2xl" />
            GitHub
          </button>
          <button
            onClick={handelFacebookSignIn}
            className="flex  gap-1 shadow-xl rounded-lg p-3"
          >
            <FaFacebook className="text-2xl text-blue" /> Facebook
          </button>
        </div>
        <p className="text-center mt-8 text-zinc-700">
          <Link to={"/signUp"}> New to Byte Cafe!! Register Now</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
