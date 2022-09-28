import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    const [breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToCart = (exercise) => {
        const newCart = [...cart, exercise];
        setCart(newCart);
    }
    const handleInput = e => {
        const newBreakTime = e.target.value;
        console.log(newBreakTime);
        setBreakTime(newBreakTime);
    }

    return (
        <div className='row'>

            <div className='col-md-9'>
                <div>
                    <div>
                        <h1 className='mt-4'>Select your exercise</h1>
                        <div className="mt-2 row row-cols-1 row-cols-lg-2  g-4 mx-md-5 shadow-lg mb-5 bg-body rounded">
                            {
                                exercises.map(exercise => <Exercise
                                    exercise={exercise}
                                    key={exercise.id}
                                    handleAddToCart={handleAddToCart}
                                ></Exercise>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-6 col-md-3'>
                <Details 
                cart={cart}
                breakTime = {breakTime}
                handleInput={handleInput}
                ></Details>
            </div>
        </div>

    );
};

export default Exercises;