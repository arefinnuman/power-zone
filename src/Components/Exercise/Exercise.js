import React from 'react';

//  Single card component
const Exercise = ({ exercise, handleAddToCart }) => {
    const { name, img, about, age, time, } = exercise;
    return (
        <div className="col">
            <div className="card shadow-lg mb-5 bg-body rounded">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>For age: <b>{age}</b></small></p>
                    <p className="card-text">Time: <b>{time} sec</b></p>
                    <p className="card-text">{about.slice(0, 100)}</p>

                    <button onClick={() => handleAddToCart(exercise)} className='btn border border-dark  btn-primary'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;


