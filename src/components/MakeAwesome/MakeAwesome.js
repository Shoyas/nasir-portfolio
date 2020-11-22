import React from 'react';
import { NavLink } from 'react-router-dom';
import './MakeAwesome.css';

const MakeAwesome = () => {
    return (
        <section className="MakeAwesome-container container-fluid">
            <div className="row">
                <div className="col-md-8 makeAwesome-detail">
                    <h3>Make It Awesome!</h3>
                    <p>There is nothing impossible If you try hard. 
                    Every part of our life contains challenges.
                    I try to best perform in my challenge.</p>
                </div>
                <div className="col-md-4">
                    <NavLink className='nav-link' to='/contact'>
                        <button type="button" class="btn btn-outline-primary button-position">Hire Me Now</button>
                    </NavLink>
                
                </div>
            </div>
        </section>
    );
};

export default MakeAwesome;