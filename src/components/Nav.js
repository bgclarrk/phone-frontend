import { NavLink } from 'react-router-dom';

function Nav() {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink to="/phone" className="nav-item nav-link">Phone</NavLink>
                <NavLink to="/history" className="nav-item nav-link">History</NavLink>
            </div>
        </div>
    </nav>
    )
}

export default Nav;