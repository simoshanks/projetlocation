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
                            <a className="nav-link" aria-current="page" href="/accueil">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/voitures">Voitures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contactez nous</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/apropos">A propos</a>
                        </li>


                    </ul>
                    <br/>
                    <div className="d-flex justify-content-between">
                        <NavLink to={'/login'} className="btn btn-success">se Connecter</NavLink>
                        <NavLink to={'/new-compte'} className="btn btn-primary"> Créer un Compte </NavLink>

                    </div>
                    


                </div>
            </div>
        </nav>

    </div>)

}
export default Navbar;