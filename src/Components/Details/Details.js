import React from "react";

const Details = ({ cart, breakTime, handleInput }) => {
    let totalExercises = 0;
    for (const item of cart) {
        totalExercises = totalExercises + item.time;
    }
    let totalBreakTime = breakTime;
    

    
    
    return (
        <div>
            <div className="mt-5 p-2">
                <div className="">
                    <div className=""></div>
                    <div>
                        <h5>Arefin Numan</h5>
                        <p>Dhaka,Bangladesh</p>
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
                            value={20}>
                            20s
                        </button>
                        <button 
                           onClick={handleInput}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={30}>
                            30s
                        </button>
                        <button 
                            onClick={handleInput}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={40}>
                            40s
                        </button>
                        <button 
                            onClick={handleInput}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={50}>
                            50s
                        </button>
                        <button 
                            onClick={handleInput}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={60}>
                            60s
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    <h4>Exercise Details</h4>
                    <div className="shadow p-2 mb-5 bg-body rounded">
                        <p>
                            <b>Exercise Time: </b>
                            {totalExercises}
                        </p>
                    </div>
                    <div className="shadow p-2 mb-5 bg-body rounded">
                        <p>
                            <b>Break Time: </b>
                            {totalBreakTime}s  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
