import React, { useContext } from "react";

import { Header } from "../Layout/style";
import Link from '../ActiveLink';
import AppContext from '../Utils/context';

import { Icon } from '../Icons';

const Navbar = () => {
    const { show, handleopen, setTheme, closeShow, theme } = useContext(
        AppContext
    );

    return(

        <>
            <Header>
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <div className="container">
                        <Link href="/">
                            <a
                                href="#!"
                                className="navbar-brand"
                                aria-label="Douglas Fortunatus Home"
                                tabIndex={show ? '-1' : undefined}
                            >
                                🫀
                            </a>
                        </Link>
                        

                        <button
                            className="navbar-toggler pr-0"
                            type="button"
                            onClick={handleopen}
                            tabIndex={show ? '-1' : undefined}
                            aria-label="Open Button Toggle"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className={`collapse navbar-collapse  ${show && 'show'}`}
                            id="collapsibleNavbar"
                        >
                            <button 
                                className="d-block d-md-none close-nav"
                                onClick={handleopen}
                            >
                                <Icon />
                            </button>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item hover__bottom d-block d-md-none">
                                    <Link href="/" activeClassName="is-active">
                                        <a
                                            className="nav-link"
                                            id="cardHover"
                                            onClick={closeShow}
                                            href="#!"
                                            aria-label="Go Home"
                                            title="Home"
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item hover__bottom">
                                    <Link href="/about" activeClassName="is-active">
                                        <a
                                            className="nav-link"
                                            id="cardHover"
                                            onClick={closeShow}
                                            href="#!"
                                            aria-label="Go to About Page"
                                            title="About"
                                        >
                                            About
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item hover__bottom">
                                    <Link href="/projects" activeClassName="is-active">
                                        <a
                                            className="nav-link"
                                            id="cardHover"
                                            onClick={closeShow}
                                            href="#!"
                                            aria-label="Go to Project Page"
                                            title="Project"
                                        >
                                            Code Shop
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item hover__bottom">
                                    <Link href="/resume" activeClassName="is-active">
                                        <a
                                            className="nav-link"
                                            id="cardHover"
                                            onClick={closeShow}
                                            href="#!"
                                            aria-label="Go to Resume Page"
                                            title="Resume"
                                        >
                                            Resume
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item hover__bottom">
                                    <Link href="/contact" activeClassName="is-active">
                                        <a
                                            className="nav-link"
                                            id="cardHover"
                                            onClick={closeShow}
                                            href="#!"
                                            aria-label="Go to Contact Page"
                                            title="Contact"
                                        >
                                            Contact
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item pl-md-3">
                                    <Link href="#0">
                                        <a
                                            className="nav-link nav-svg"
                                            aria-label={`Turn On ${
                                                theme === false ? 'Light' : 'Dark'
                                            } Mood`}
                                            onClick={setTheme}
                                            href="#!"
                                        >
                                            🌓
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Header>
        </>
    );
};

export default Navbar;
