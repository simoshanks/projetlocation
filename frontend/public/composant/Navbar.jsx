import { NavLink } from "react-router-dom";
function Navbar() {
    return (<div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/accueil">Azicare</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/accueil">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/voitures">voitures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">contactez nous</a>
                        </li>
                                                <li className="nav-item">
                            <a className="nav-link" href="/apropos">A propos</a>
                        </li>


                    </ul>
                    <NavLink to={'/login'}  className="btn btn-success">login</NavLink>
                      
                    
                </div>
            </div>
        </nav>

    </div>)

}
export default Navbar;