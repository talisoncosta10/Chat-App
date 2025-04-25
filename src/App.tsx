import React from "react";
import Navlink from "./components/Navlinks";
import Chatlist from "./components/Chatlist";
import Chatbox from "./components/Chatbox";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
       {/* <Navlink /> 
       <Chatlist />
       <Chatbox /> */}
       <Login /> 
       <Register />
    </div>
  );
}

export default App;