// import { useEffect, useState } from "react";
// export function Fetch() {
//   const [Admin, setAdmin] = useState([]);
//   const getAdmin = async () => {
//     fetch("BASE_URL/api/admins");
//     then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw "wrong";
//       }
//       return response.json();
//     }).then((data) => {
//       if (data.status == "success") {
//         console.log(data);
//         setAdmin(data.nmessage);
//       }
//     })

//     .catch((error) =>{
//         console.log(error);
    
//     })
//   };
// }
// useEffect(()=>{
//     getAdmin();
// },[]);
// return (
//     <>
//     <h1>welcome</h1>
//     <div className="container">
// <div className="'row">
//     {Object.keys(Admin).map((item,idx)=>{
//         return (
//             <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
//               <div className="card p-2">{item}</div>
//             </div>
//           );
//     })}
// </div>
//     </div>
//     </>
// )

