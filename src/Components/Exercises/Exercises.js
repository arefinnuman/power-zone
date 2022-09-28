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
            <div>
                <h1 className='mt-4'>Select your exercise</h1>
                <div className="mt-2 row row-cols-1 row-cols-md-2 g-4 mx-md-5 shadow-lg mb-5 bg-body rounded">
                {
                    exercises.map(exercise => <Exercise 
                        exercise={exercise}
                        key={exercise.id}
                        ></Exercise>)
                }
                </div>
            </div>
        </div>
    );
};

export default Exercises;