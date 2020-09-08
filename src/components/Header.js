import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <>
             <Navbar bg="primary" variant="dark" col="12" className="navbar-box">
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header
