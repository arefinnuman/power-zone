import React from 'react';

const Exercise = ({exercise}) => {
    const {name, img, about, age, time} = exercise;
    return (
        <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><small>For age: <b>{age}</b></small></p>
                        <p className="card-text">Time: <b>{time}</b></p>
                        <p className="card-text">{about.slice(0,100)}</p>
                        <button className='btn border border-dark  btn-primary'>Add to list</button>
                    </div>
                </div>
        </div>                     
    );
};

export default Exercise;


