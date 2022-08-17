import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-scroll";

import './Header.scss';

const Header = ({title1, title2, title3, title4 }) => {

    const [open, setOpen] = useState(false);
    const [hamburger, setHamburger] = useState(true);

    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const showHamburger = () => {
        if(window.innerWidth <= 960) {
            setHamburger(true);
        } else {
            setHamburger(false)
        }
    }

    /* Hides hamburger button even after refresh */
    useEffect(() => {
        showHamburger()
    }, [])

    window.addEventListener('resize', showHamburger);

    /** Disable scrolling when menu is opened */
    useEffect(() => {
        if(open === true) {
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";
        }
        else {
            document.documentElement.style.overflow = 'scroll';
            document.body.scroll = "yes";
        }
    }, [open])


    /** Close menu when click is detected outside */
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&!hamburgerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }, [setOpen]
    );
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [handleClickOutside]);

    /** Disappearing header on scroll */
    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState(null);
      
        useEffect(() => {
            let lastScrollY = window.pageYOffset;
      
            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset;
                const direction = scrollY > lastScrollY ? "down" : "up";
                if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                    setScrollDirection(direction);
                }
                lastScrollY = scrollY > 0 ? scrollY : 0;
            };
            window.addEventListener("scroll", updateScrollDirection); // add event listener
            return () => {
                window.removeEventListener("scroll", updateScrollDirection); // clean up
            }
        }, [scrollDirection]);
      
        return scrollDirection;
    };

    const scrollDirection = useScrollDirection();

    return (
        <nav className={`${scrollDirection === "down" ? "navbar--hide" : "navbar--show"}`}>
            {/* -- Hamburger Icon -- */}
            {hamburger && <div ref={hamburgerRef} className={`${open ? "navbar__hamburger--open" : "navbar__hamburger--close"}`} onClick={handleClick}>
                <span className="navbar__hamburger__bar" />
                <span className="navbar__hamburger__bar" />
                <span className="navbar__hamburger__bar" />
            </div>}

            {/* -- Menu -- */}
            <div className={`${open ? "navbar__menu--open" : "navbar__menu--close"}`}>
                <ul ref={menuRef}>
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMobileMenu}>
                            <div>{title1}</div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMobileMenu}>
                            <div>{title2}</div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMobileMenu}>
                            <div>{title3}</div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMobileMenu}>
                            <div>{title4}</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    /** Title of first item */
    title1: PropTypes.string,

    /** Title of second item */
    title2: PropTypes.string,

    /** Title of third item */
    title3: PropTypes.string,

    /** Title of fourth item */
    title4: PropTypes.string,
}

Header.defaultProps = {
    title1: "HOME",
    title2: "ABOUT",
    title3: "PROJECTS",
    title4: "CONTACT",
};

export default Header