import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    return (
        <div>
            <h1>Select your exercise</h1>
            <h3>Exercises: {exercises.length}</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                exercises.map(exercise => <Exercise 
                    exercise={exercise}
                    ></Exercise>)
            }
            </div>

           
        </div>
    );
};

export default Exercises;