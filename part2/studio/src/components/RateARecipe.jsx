import React from "react";

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({ rating }) {
  function GiveRating(props) {
    return <h3>{stars[props.rating - 1]}</h3>;
  }
  return rating > 0 && rating <= 5 ? <GiveRating rating={rating} /> : null;
}
export default RateARecipe;

{
  /* <div>
  {GiveRating()}
</div> */
}

//conditional to render stars based on a number provided in App.js
