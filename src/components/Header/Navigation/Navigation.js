import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../../image/oie_transparent (1).png';
import './Navigation.css';

const Navigation = () => {
    return (
        
        <div style={{"backgroundColor":"#F3F2F0"}}>
            <Navbar className="pt-4" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <NavLink className='nav-link' to='/home'>
                        <img className="logo" src={logo} alt=""/>
                    </NavLink>    
                </Navbar.Collapse>
                <Navbar.Collapse className="d-flex justify-content-end" id="basic-navbar-nav" style={{"margin-right": "150px"}}>
                    <NavLink className='nav-link' to='/home'>Home<span class="sr-only">(current)</span></NavLink>
                    <NavLink className='nav-link' to='/works'>Works</NavLink>
                    <NavLink className='nav-link' to='/blogs'>Blogs</NavLink>
                    <NavLink className='nav-link' to='/resume'>Resume</NavLink>
                    <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;