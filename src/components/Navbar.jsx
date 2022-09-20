import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img
                        className='img-fluid rounded-pill'
                        src={'https://www.pngitem.com/pimgs/m/43-438083_rick-et-morty-rick-fan-art-rick-icon.png'}
                        alt="RM" width="50" height="auto"></img>
                </Link>
                <div className="navbar-collapse d-flex justify-content-end">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/list"
                        >
                            Characteres
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <NavLink
                className="nav-item nav-link"
                to="/login"
                >
                Logout
                </NavLink>
                </ul>
            </div> */}
            </nav >
        </div>
    )
}