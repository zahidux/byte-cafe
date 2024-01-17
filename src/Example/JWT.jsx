///////////////////////////////////////////////////////////////////////////////////////////////[1]
//jwt use for user email validation

//server site --
// app.post("/jwt", (req, res) => {
//   const user = req.body;
//   console.log(user);
//   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "1h",
//   });
//   res.send({ token });
// });

//client site auth provider page for jwt token varify for signin social signin singup

//asiox instroll

// useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//       console.log("current user", currentUser);

//       //get and set token
//       if (currentUser) {
//         axios
//           .post("http://localhost:5000/jwt", { email: currentUser.email })
//           .then((data) => {
//             console.log(data.data);
//             localStorage.setItem("access-token", data.data.token);
//           });
//       } else {
//         localStorage.removeItem("access-token");
//       }
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//////////////////////////////////////////////////////////////////////////////////////////////////////////[2]
//next step is user booking data safe load process

//in the step already did but few things when you load data then  some things add on client site

// 2 way here first way
// useEffect(() => {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.error) {
//           setBookings(data);
//         } else {
//logout and then navigate you can here
//           navigate("/");
//         }
//       });
//   }, [url]);

// here 2nd way (Axios Interceptor)

// // import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

// const UseCart = () => {
//   const { user } = useContext(AuthContext);

//   const token = localStorage.getItem("access-token");
//   const axiosSecure = useAxiosSecure();

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure(`/carts?email=${user?.email}`);
//       console.log("res from axios", res);
//       return res.data;
//     },
//   });
//   return [cart, refetch];
// };

// export default UseCart;

//2nd way 2nd part

// create - useAxiosSecure file on hook folder then

// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5000",
// });
// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useContext(AuthContext);

//   // request interceptor to add authorization header for every secure call to teh api
//   axiosSecure.interceptors.request.use(
//     function (config) {
//       const token = localStorage.getItem("access-token");
//       // console.log('request stopped by interceptors', token)
//       config.headers.authorization = `Bearer ${token}`;
//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );

//   // intercepts 401 and 403 status
//   axiosSecure.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     async (error) => {
//       const status = error.response.status;
//       // console.log('status error in the interceptor', status);
//       // for 401 or 403 logout the user and move the user to the login
//       if (status === 401 || status === 403) {
//         await logOut();
//         navigate("/login");
//       }
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default useAxiosSecure;

//server site
// / booking get some data read data
//     app.get("/booking", verifyJWT, async (req, res) => {
//       const decoded = req.decoded;
//       console.log("come back after varify");
// ......................................................
//       if (decoded.email !== req.query.email) {
//         return res.status(403).send({ error: 1, message: "forbidden access" }); //use 2 line for jwt
//       }
// ...........................................................
//       let query = {};
//       if (req.query?.email) {
//         query = { email: req.query.email };
//       }
//       const result = await bookingCollection.find(query).toArray();
//       res.send(result);
//     });

//jwt verify//////////////////////////////////////////////////////////////////////////////////// [3]

// const verifyJWT = (req, res, next) => {
//     console.log("hitting verify jwt");
//     console.log(req.headers.authorization);
//     const authorization = req.headers.authorization;
//     if (!authorization) {
//       return res
//         .status(401)
//         .send({ error: true, message: "Unauthorized access" });
//     }
//     const token = authorization.split(" ")[1];
//     console.log("TOKEN INSSIDE VERIFY", token);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
//       if (error) {
//         return res
//           .status(403)
//           .send({ error: true, message: "Unauthorized access" });
//       }
//       req.decoded = decoded;
//       next();
//     });
//   };
