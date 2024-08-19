//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cart from "./component/cart.jsx";
import Form from "./component/form.jsx";
import Videogames from "./component/videogames.jsx";
import Onkey from "./component/onkey.jsx";
import Onsub from "./component/onsub.jsx";
import Counter from "./component/counter.jsx";
import Getdata from "./component/getdata.jsx";
import Test from "./component/test.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Test />);

