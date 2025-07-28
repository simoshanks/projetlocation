import { useNavigate } from "react-router-dom";

function Accueil() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#bcb8b1', minHeight: '100vh' }}>
            {/* Carousel */}
            <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/image/carosel1.jpg"
                            className="d-block w-100"
                            alt="Slide 1"
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-light fw-bold">Découvrez notre sélection de voitures</h2>
                            <p>Qualité, confort et performance à votre portée</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/image/carosel2.jpg"
                            className="d-block w-100"
                            alt="Slide 2"
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-light fw-bold">Réservez en quelques clics</h2>
                            <p>Simple, rapide et sécurisé</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/image/carosel3.jpg"
                            className="d-block w-100"
                            alt="Slide 3"
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-light fw-bold">Partez l'esprit tranquille</h2>
                            <p>Avec Azicare, la route est à vous</p>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

            {/* Content */}
            <div className="container py-5">
               <h1
  className="text-center mb-5"
  style={{
    color: "#4e4e4e",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
  }}
>
  Bienvenue sur Azicare
</h1>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="text-center text-md-start">Bonjour 👋</h2>
                        <p className="text-center text-md-start">
                            Bienvenue sur notre plateforme de location de voitures.
                            Parcourez notre sélection et réservez votre voiture idéale !
                        </p>
                        <div className="text-center text-md-start">
                            <button
                                className="btn btn-dark mt-3"
                                onClick={() => navigate('/voitures')}
                            >
                                Voir les voitures
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="/image/image.png"
                            alt="Voiture"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                borderRadius: "8px",
                              
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;