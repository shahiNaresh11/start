// import React, { useEffect, useState } from "react";
// import "./Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { getCredentials } from "../Pages/Api/AxiosRequest";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [credentials, setCredentials] = useState([]);

//   const emailChange = (e) => setEmail(e.target.value);
//   const passwordChange = (e) => setPassword(e.target.value);

//   useEffect(() => {
//     getCredentials().then((response) => {
//       setCredentials(response);
//     });
//   }, []);

//   // const handleLogin = (e) => {
//     e.preventDefault();
//   //   const matchedCredential = credentials.find(
//   //     (cred) => cred.email === email && cred.password === password
//   //   );
//   //   if (matchedCredential) {
//   //     // Navigate to another page after successful login
//   //     navigate("/dashboard");
//   //   } else {
//   //     alert("Invalid email or password");
//   //   }
//   };

//   return (
//     <div className="box text-info">
//       <div className="title">
//         <h1 className="text-info fs-1 mb-5">LOG IN</h1>

//         <form onSubmit={handleLogin}>
//           <label htmlFor="email">Email/Address</label>
//           <input
//             value={email}
//             onChange={emailChange}
//             className="mb-3"
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             required
//           />

//           <label htmlFor="Password">Password:</label>
//           <input
//             value={password}
//             onChange={passwordChange}
//             className="mb-3"
//             type="password"
//             id="Password"
//             placeholder="Enter your password"
//             required
//           />

//           <button type="submit" className="btn btn-primary mx-5 fs-8 light-gray">
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
