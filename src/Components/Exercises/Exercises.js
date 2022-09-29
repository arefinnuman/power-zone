import React, { useEffect, useState } from "react";

import Details from "../Details/Details";
import Exercise from "../Exercise/Exercise";
import logo from "../Utilities/Images/logo.png";

const Exercises = () => {
  // State for exercises
  const [exercises, setExercises] = useState([]);

  // State for cart
  const [cart, setCart] = useState([]);

  // Load data from server
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  // Add to cart handler
  const handleAddToCart = (selectedExercise) => {
    const newCart = [...cart, selectedExercise];
    setCart(newCart);
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <div>
          <div>
            {/* logo section */}
            <div className="m-3 ps-2 d-flex justify-concent-center align-items-center">
              <img src={logo} alt="" />
              <h2 className="">Power Zone</h2>
            </div>

            <h4 className="mt- ps-5">Select your exercise</h4>
            {/* Component Section */}
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
        <div className="ms-5">
          <h1>Read Our Documentary</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How Does React Work?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  ReactJS divides the UI into isolated reusable pieces of code
                  known as components. React components work similarly to
                  JavaScript functions as they accept arbitrary inputs called
                  properties or props. It's possible to have as many components
                  as necessary without cluttering your code.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Difference between props and state?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <b>Props: </b> Props are known as properties it can be used to pass
                  data from one component to another. Props cannot be modified,
                  read-only, and Immutable. Example: Modify the default code
                  with the below code.
                  <br />
                  <b>State: </b> The state represents parts of an
                  Application that can change. Each component can have its
                  State. The state is Mutable and It is local to the component
                  only. Example: Let us create a Class component named Car.js
                  within the same project “fruits”. Add the following code in
                  the Car.js component.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Why we used useEffect without any data load?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="col-6 col-md-3">
        <Details cart={cart}></Details>
      </div>
    </div>
  );
};

export default Exercises;
