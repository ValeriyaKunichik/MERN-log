import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Journal from "./components/Journal";
import EditEntry from "./components/EditEntry";
import AddNewEntry from "./components/AddNewEntry";
import NewClient from "./components/NewClient";


function App() {
  return (
    
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
          <Route exact path="/" element={<Journal/>}/>
          <Route path= "/edit/:id/"  element={<EditEntry />} />
          <Route path="/create" element={<AddNewEntry />} />
          <Route path="/user" element={<NewClient/>} />
      </Routes>
      </div>
   
  );
}

export default App;