"use client";

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './modules/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container>
                <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand>CSX</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href="#images" passHref legacyBehavior>
                            <Nav.Link>Images</Nav.Link>
                        </Link>
                        <Link href="#contactus" passHref legacyBehavior>
                            <Nav.Link>Contact us</Nav.Link>
                        </Link>
                        <Link href="#cards" passHref legacyBehavior>
                            <Nav.Link>Cards</Nav.Link>
                        </Link>
                        <button type="button" class={`btn ${styles.navbarSection}`}>Signin</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
