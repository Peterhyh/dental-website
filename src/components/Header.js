import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar className='nav p-4' dark expand='md' fixed='top'>
            <NavbarBrand className='ms-5' href='/'>Dental Brand</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link'>Our Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link'>Our Services</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Contact Us
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Location</DropdownItem>
                            <DropdownItem>Contact Info</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>

    )
};

export default Header;