import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm" style={{ backgroundColor: 'rgb(0, 51, 106)', padding: '.7rem', marginBottom: 8 }}>
            <Link
                className="navbar-brand"
                to="/"
            >
                <img
                    className='img-fluid rounded-pill'
                    src={'https://www.pngitem.com/pimgs/m/43-438083_rick-et-morty-rick-fan-art-rick-icon.png'}
                    alt="RM" width="50" height="auto"></img>
                <small className='text-white px-3'>Rick and Morty App</small>
            </Link>
            <div className="collapse navbar-collapse d-flex justify-content-end">
                <div className="navbar-nav ">

                    <NavLink
                        className="nav-item nav-link text-white"
                        to="/list"
                    >
                        Characteres
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link text-white"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>


        </nav >

    )
}