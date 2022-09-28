import React from "react";

const Details = ({ cart }) => {
    let totalExercises = 0;
    for (const item of cart) {
        totalExercises = totalExercises + item.time;
    }
    const button = (button) => {
        const buttonValue = button.target.value;
        console.log(buttonValue);
    };

    return (
        <div>
            <div className="mt-5 p-2">
                <div className="">
                    <div className="img-fluid img-thumbnail w-25 h-25"></div>
                    <div>
                        <h5>Arefin Numan</h5>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div>
                    <h5>Add a Break</h5>
                    <div className="">
                        <button
                            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}
                        >
                            10
                        </button>
                        <button
                            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}>
                            20s
                        </button>
                        <button 
                            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}>
                            30s
                        </button>
                        <button 
            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}>
                            40s
                        </button>
                        <button 
                            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}>
                            50s
                        </button>
                        <button 
                            onClick={button}
                            className="m-2 btn btn-light btn btn-outline-primary rounded"
                            value={10}>
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
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
