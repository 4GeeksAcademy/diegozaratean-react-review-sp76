//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cart from "./component/cart.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Cart cantidad='0' />);

