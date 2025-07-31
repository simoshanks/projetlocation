import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/voiture?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>

      {/* ===== Carousel ===== */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img
              src="/image/carosel1.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(80%)" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ bottom: "20%" }}>
              <h2 className="mb-3 fw-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                Découvrez nos meilleures voitures
              </h2>
              <button
                className="btn btn-light text-dark px-4 py-2 fw-bold rounded-pill"
                onClick={() => navigate('/voiture')}
              >
                Voir les voitures
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img
              src="/image/carosel2.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(80%)" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ bottom: "20%" }}>
              <h2 className="mb-3 fw-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                Réservez facilement et rapidement !
              </h2>
              <button
                className="btn btn-light text-dark px-4 py-2 fw-bold rounded-pill"
                onClick={() => navigate('/voiture')}
              >
                Explorer
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img
              src="/image/carosel3.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ maxHeight: "550px", objectFit: "cover", filter: "brightness(80%)" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ bottom: "20%" }}>
              <h2 className="mb-3 fw-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                Trouvez votre voiture idéale
              </h2>
              <button
                className="btn btn-light text-dark px-4 py-2 fw-bold rounded-pill"
                onClick={() => navigate('/voiture')}
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* ===== Hero Section ===== */}
      <div
        id="hero"
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f4f7fa, #dde3ea)",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >

        <div className="container">
          <h1 className="text-center " style={{color:'#3b4a6b'}}> Bienvenue à Azicare </h1>
          <p className="text-center text-md-start text-uppercase fw-semibold mb-2" style={{ color: "#6c757d", letterSpacing: "2px" }}>
            Location de voitures facile & rapide
          </p>

          <div className="row align-items-center">

            {/* Texte à gauche */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="text-center text-md-start mb-3 fw-bold" style={{ color: "#3b4a6b" }}>
                Bonjour 👋
              </h1>
              <p className="text-center text-md-start fs-5 text-muted">
                Bienvenue sur notre plateforme de location de voitures.
                Explorez notre sélection et réservez la voiture idéale selon vos besoins.
              </p>
              <div className="text-center text-md-start">
                <button
                  className="btn btn-primary mt-3 px-4 py-2"
                  onClick={() => navigate("/voiture")}
                  style={{ backgroundColor: "#3b4a6b", border: "none" }}
                >
                  Voir les voitures
                </button>
              </div>
            </div>

            {/* Image à droite */}
            <div className="col-md-6 text-center">
              <img
                src="/image/car3.png"
                alt="Voiture"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "400px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Search Box Section ===== */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#4e4e4e" }}>
          Trouvez votre voiture
        </h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="input-group shadow">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher une voiture par marque, modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="btn btn-dark"
                onClick={handleSearch}
                disabled={!searchTerm.trim()}
              >
                <i className="bi bi-search me-1"></i> Chercher
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Accueil;