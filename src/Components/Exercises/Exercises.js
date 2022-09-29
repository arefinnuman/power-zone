import React, { useEffect, useState } from "react";

import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import logo from "../Utilities/Images/logo.png";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  
  const handleAddToCart = (selectedExercise) => {
    const newCart = [...cart, selectedExercise];
    setCart(newCart);
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <div>
          <div>
            <div className="m-3 ps-2 d-flex justify-concent-center align-items-center">
              <img src={logo} alt="" />
              <h2 className="">Power Zone</h2>
            </div>
            <h4 className="mt- ps-5">Select your exercise</h4>
            <div className="mt-2 row row-cols-1 row-cols-lg-2 g-4 mx-md-5 ">
              {exercises.map((exercise) => (
                <Exercise
                  exercise={exercise}
                  key={exercise.id}
                  handleAddToCart={handleAddToCart}
                ></Exercise>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <Details
          cart={cart}
        ></Details>
      </div>
      
    </div>
  );
};

export default Exercises;
