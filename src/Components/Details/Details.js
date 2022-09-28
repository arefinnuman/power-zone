import React from 'react';

const Details = () => {
    return (
        <div>
            <div className='mt-5 p-2'>
                <div className=''>
                    <div className='img-fluid img-thumbnail w-25 h-25'>
                        
                    </div>
                    <div>
                        <h5>Arefin Numan</h5>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div>
                    <h5>Add a Break</h5>
                    <div className=''>
                        <button className='m-2 btn btn-light btn btn-outline-primary rounded'>10</button>
                        <button className='m-2 btn btn-light btn btn-outline-primary rounded'>20</button>
                        <button className='m-2 btn btn-light btn btn-outline-primary rounded'>30</button>
                        <button className='m-2 btn btn-light btn btn-outline-primary rounded'>40</button>
                    </div>
                </div>

                <div className='mt-4'>
                    <h4>Exercise Details</h4>
                    <div class="shadow p-2 mb-5 bg-body rounded">
                        <p><b>Exercise Time: </b>00</p>
                    </div>
                    <div class="shadow p-2 mb-5 bg-body rounded">
                        <p><b>Break Time: </b>00</p>
                    </div>
                    
                </div>
            </div>


        </div>
    );
};

export default Details;