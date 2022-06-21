import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';


  // **** pages**** //
import Main from "../pages/Main";
import LogIn from "../pages/Login";
import SignUp from "../pages/SignUp";
import Upload from "../pages/Upload";
import Edit from "../pages/Edit";


function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={< Main/>} />
      <Route exact path="/user/login" element={< LogIn />} />
      <Route exact path="/user/signup" element={< SignUp />} /> 
      <Route exact path="/posts/post" element={< Upload />} />
      <Route exact path="/posts/edit" element={< Edit />} />
    </Routes>
  </>
  );
}

export default App;
