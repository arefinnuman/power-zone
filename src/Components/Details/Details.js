import React from "react";
import Swal from 'sweetalert2';
import img from "../Utilities/Images/image1.png";

const Details = ({ cart, breakTime, handleInput }) => {
    const sweetAlert = () => {
        Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  let totalExercises = 0;
  let quantity = 0;
  for (const item of cart) {
    totalExercises = totalExercises + item.time * item.quantity;
    quantity = quantity + item.quantity;
  }
  let totalBreakTime = breakTime;

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
          <div className="">
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={10}
            >
              10s
            </button>
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={20}
            >
              20s
            </button>
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={30}
            >
              30s
            </button>
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={40}
            >
              40s
            </button>
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={50}
            >
              50s
            </button>
            <button
              onClick={handleInput}
              className="m-2 btn btn-light btn btn-outline-primary rounded"
              value={60}
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
              {totalBreakTime}s
            </p>
          </div>
        </div>
        <div class="d-grid">
          <button onClick={sweetAlert} class="btn btn-primary" type="button">
            Button
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
