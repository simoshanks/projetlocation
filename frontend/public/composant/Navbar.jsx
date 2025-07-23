import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const connectedUser = JSON.parse(localStorage.getItem("user"));
    setUser(connectedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/accueil">Azicare</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/accueil">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/voitures">Voitures</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contactez-nous</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/apropos">À propos</NavLink>
            </li>
          </ul>

          <div className="d-flex">
            {!user ? (
              <>
                <NavLink to="/login" className="btn btn-success me-2">Se connecter</NavLink>
                <NavLink to="/new-compte" className="btn btn-primary">Créer un compte</NavLink>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <span className="me-3 text-primary fw-bold">{user.prenom}</span>
                <button onClick={handleLogout} className="btn btn-outline-danger">Déconnexion</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
