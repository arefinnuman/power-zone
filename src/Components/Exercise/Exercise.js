import React from 'react';

const Exercise = ({exercise}) => {
    const {name, img, about, age, time} = exercise;
    return (
        <div className="col">
                <div className="card">
                <img src={img} className="card-img-top" alt="" />
                 <div className="card-body">
                <h5 className="card-title">{name}</h5>
            <p className="card-text">{about}</p>
        </div>
    </div>
  </div>          
            
    );
};

export default Exercise;


