import { Facebook, GitHub, Google, Twitter } from '@mui/icons-material';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import './navbarstrap.css'

function NavbarStrap(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            className='navbarContainer'
            full
            sticky='top'
            light
            expand='xl'
            container='fluid'
        >
            <div className="left">
                {
                    isOpen ?
                        (
                            <h3 style={{ display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "18px" }}>BLOG-WID-MAJID </h3>
                        )
                        :
                        (
                            <div
                                className="holder-left">
                                <Facebook className='icons' />
                                <Twitter className='icons' />
                                <GitHub className='icons' />
                                <Google className='icons' />
                            </div>
                        )
                }
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <div className={isOpen ? 'mobile' : "middle"} >
                    <ul className="links">
                        <NavbarText active className='links-item'>HOME</NavbarText>
                        <NavbarText active className='links-item'>ABOUT</NavbarText>
                        <NavbarText active className='links-item'>BLOG</NavbarText>
                        <NavbarText active className='links-item' >WRITE</NavbarText>
                    </ul>
                </div>
                <div className={isOpen ? "mobileRight" : "right"}>
                    <NavbarText className='links-item'>Login</NavbarText>
                    <NavbarText className='links-item'>Register</NavbarText>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default NavbarStrap;