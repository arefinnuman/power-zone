import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import { addToDb, getStoredCart } from "../Utilities/FakeDb/fakedb";
import logo from "../Utilities/Images/logo.png";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    for(const id in storedCart){
      const addedExercise = exercises.find(exercise => exercise.id === id);
      console.log(addedExercise);
    }
  }, []);

  const handleAddToCart = (exercise) => {
    const newCart = [...cart, exercise];
    setCart(newCart);
    addToDb(exercise.id);
  };
  const handleInput = (e) => {
    setBreakTime(e.target.value);
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
          breakTime={breakTime}
          handleInput={handleInput}
        ></Details>
      </div>
    </div>
  );
};

export default Exercises;
