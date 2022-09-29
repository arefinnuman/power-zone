import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import img from "../Utilities/Images/image1.png";

// Toaster from react hot toast
const success = () => toast.success("Activity Completed");

// Details component
const Details = ({ cart }) => {
  let totalExercises = 0;
  for (const item of cart) {
    totalExercises = totalExercises + item.time;
  }

  // UseState for bneakingtime
  const [exerciseBreakTime, setExerciseBreakTime] = useState(0);

  // BreakTime event handler
  const breakTime = (time) => {
    setExerciseBreakTime(time);
    localStorage.setItem("break-time", JSON.stringify(time));
  };

  // UseEffect for getting break time from local storage
  useEffect(() => {
    const storedBreakTime = localStorage.getItem("break-time");
    const parsedBreakTime = JSON.parse(storedBreakTime);
    if (storedBreakTime) {
      setExerciseBreakTime(parsedBreakTime);
    }
  }, []);

  return (
    <div>
      <div className="mt-5 p-2 ">
        {/* details Section */}
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <img className="rounded-circle " src={img} alt="" />
          <div className="ms-2">
            <h6>Arefin Numan</h6>
            <small>Dhaka,Bangladesh</small>
          </div>
        </div>

        {/* personal information */}
        <div className="d-flex justify-content-between shadow-lg mb-5 bg-body rounded p-2 my-2 rounded-5">
            <h6>75kg</h6>
            <h6>6.5ft</h6> 
            <h6>24yrs</h6>
        </div>

        {/* Break Button section */}
        <div>
          <h5>Add a Break</h5>
          <div>
            <button
              onClick={() => breakTime(10)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              10s
            </button>
            <button
              onClick={() => breakTime(20)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              20s
            </button>
            <button
              onClick={() => breakTime(30)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              30s
            </button>
            <button
              onClick={() => breakTime(40)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              40s
            </button>
            <button
              onClick={() => breakTime(50)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              50s
            </button>
            <button
              onClick={() => breakTime(60)}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
            >
              60s
            </button>
          </div>
        </div>

        {/* Time Section */}
        <div className="mt-4">
          
          {/* Exercise */}
          <h4>Exercise Details</h4>
          <div className="shadow p-2 mb-5 bg-body rounded">
            <p>
              <b>Exercise Time: </b>
              {totalExercises}s
            </p>
          </div>
          {/* Break */}
          <div className="shadow p-2 mb-5 bg-body rounded">
            <p>
              <b>Break Time: </b>
              {exerciseBreakTime}s
            </p>
          </div>
        </div>
        {/* Toaster Button */}
        <div className="d-grid">
          <button onClick={success} className="btn btn-primary" type="button">
            Activity Completed
          </button>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Details;
