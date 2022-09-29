import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import { addToDb, getStoredCart } from "../Utilities/FakeDb/fakedb";
import logo from "../Utilities/Images/logo.png";


const Exercises = () => {
  
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);
  
  
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedExercise = exercises.find((exercise) => exercise.id === id);
      if (addedExercise) {
        const quantity = storedCart[id];
        addedExercise.quantity = quantity;
        savedCart.push(addedExercise);
      }
    }
    setCart(savedCart);
  }, [exercises]);


  const handleAddToCart = (selectedExercise) => {
    toast("Added to cart")
    let newCart = [];
    const exists = cart.find((exercise) => exercise.id === selectedExercise.id);
    if(!exists){
      selectedExercise.quantity = 1;
      newCart = [...cart, selectedExercise];
    }
    else{
      const rest = cart.filter((exercise) => exercise.id !== selectedExercise.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedExercise.id);
  };
  
  const [breakTime, setBreakTime] = useState(0);

  
  const handleInput = (e) => {
    const breakTime = e.target.value;
    setBreakTime(breakTime);
    console.log(breakTime);
    addToDb(breakTime);
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
      <ToastContainer />
    </div>
  );
};

export default Exercises;
