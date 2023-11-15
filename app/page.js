"use client";
//------------------------------useState hook in react and that we only create variables like this in react
// import React,{useState} from 'react'

// const page = () => {

// const [marks, setmarks] = useState(10);

// const handlebtnchange =()=>{
//   alert("my orignal marks value of " + marks + " is now going to be changed to 50")
//   setmarks(50);
// }
//   return (
//     <div>
//     <h1>My Marks are {marks}</h1>
//     <button onClick={handlebtnchange}>Update Value</button>
//     </div>
//   )
// }

// export default page

// ----------------------------------------------------below we learn props in react
// import React, { useState } from 'react'
// import Header from '@/Components/Header';

// const page = () => {

//   const [user, setuser] = useState("Aditya")
//   const [editor, seteditor] = useState("Savan")
//   return (
//     <div>

// <Header user = {user}  editor={editor}/>

// Main Page
// <br />
// {user}
//     </div>
//   )
// }

// export default page

//--------------------------Routing in react
// import React from 'react'
// import Header from '@/Components/Header';

// const page = () => {
//   return (
//     <div>
//       {/* <Header/> */}
//       {/* we comment out this header component here as we made header fix at the top by using it in our layout.js directly */}
//     </div>
//   )
// }

// export default page

//------------------------------------Axios in react

import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [images, setimages] = useState([]);
  const getImages = async () => {
    // alert("images fetched !")
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      // console.log(data);
      // here we pass in the data/response being received from the api call to this setimages method created above
      setimages(data);
      // console.log(images);
    } catch (error) {
      console.log("error in fetching images !!!");
    }
  };

  return (
    <div>
      <h1>This Is The Home Page</h1> <br />
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-600 text-white font-bold"
      >
        Get Random Images
      </button>
      <div className="p-10">
        {images.map((e, i) => {
          return (
            <img
              key={i}
              src={e.download_url}
              alt="api images"
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
