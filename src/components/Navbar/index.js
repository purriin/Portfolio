import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

// Structure of Navigation bar:
const Navbar = () => {
return (
    <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='' activeStyle>

                </NavLink>
            </NavMenu>
        </Nav>
    </>
);
};

export default Navbar;