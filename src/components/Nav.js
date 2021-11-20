import { NavLink } from 'react-router-dom';

function Nav() {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink to="/call" className="nav-item nav-link">Call</NavLink>
                <NavLink to="/history" className="nav-item nav-link">History</NavLink>
            </div>
        </div>
    </nav>
    )
}

export default Nav;