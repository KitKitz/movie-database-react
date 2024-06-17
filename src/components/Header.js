import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import siteLogo from '../images/SLATE-logo.png';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    function showHideNav() {
        setNavOpen(!navOpen);
    }

    function isDesktop(e) {
        if (e.matches) {
            setNavOpen(false);
        }
    }

    // not applying at desktop size, open class still gets applied
    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width:768px)');
        mediaQuery.addEventListener('change', isDesktop)
        //cleanup funciton to remove the listener 
        return () => {
            mediaQuery.removeEventListener('change', isDesktop)
        };
    }, [])

    return (
        <header className={navOpen ? 'open' : undefined}>
            <Link to="/"><img src={siteLogo} alt="SLATE logo"/></Link>
            <button className="nav-btn-container"
                onMouseDown={(e) => { e.preventDefault(); }}
                onClick={showHideNav}>
                <span className="hamburger-menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>
            
            <Nav showHideNav={showHideNav} setNavOpen={setNavOpen} />
            
        </header>
    )
}

export default Header
