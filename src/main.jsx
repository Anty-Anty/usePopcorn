import { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
// import App from './App-useGeolocation.jsx'
// import App from './App-v1.jsx'

import StarRating from "./StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} starts</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={2} />
    <StarRating maxRating={10} />
    <StarRating size={24} color="red" /> */}
    {/* <Test /> */}
  </StrictMode>
);
