import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import img from "../Utilities/Images/image1.png";

const success = () => toast.success("Activity Completed");

const Details = ({ cart }) => {
  let totalExercises = 0;
  for (const item of cart) {
    totalExercises = totalExercises + item.time;
  }
  const [exerciseBreakTime, setExerciseBreakTime] = useState(0);

  const breakTime = (time) => {
    setExerciseBreakTime(time);
    localStorage.setItem("break-time", JSON.stringify(time));
  };

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
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <img className="rounded-circle " src={img} alt="" />
          <div className="ms-2">
            <h6>Arefin Numan</h6>
            <small>Dhaka,Bangladesh</small>
          </div>
        </div>
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

        <div className="mt-4">
          <h4>Exercise Details</h4>
          <div className="shadow p-2 mb-5 bg-body rounded">
            <p>
              <b>Exercise Time: </b>
              {totalExercises}s
            </p>
          </div>
          <div className="shadow p-2 mb-5 bg-body rounded">
            <p>
              <b>Break Time: </b>
              {exerciseBreakTime}s
            </p>
          </div>
        </div>
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
