import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Modifiervoiture() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [voiture, setVoiture] = useState({
    matricul: "",
    marque: "",
    prix: "",
    status: "",
    img: null,
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/voiture/${id}`)
      .then((res) => {
        const car = res.data[0];
        setVoiture({
          matricul: car.matricul,
          marque: car.marque,
          prix: car.prix,
          status: car.status || "",
          img: car.img
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setVoiture({ ...voiture, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("matricul", voiture.matricul);
    formData.append("marque", voiture.marque);
    formData.append("prix", voiture.prix);
    formData.append("status", voiture.status);
    formData.append("img", voiture.img);

    axios.put(`http://localhost:3000/voiture/${id}`, formData)
      .then(() => {
        alert("Voiture modifiée avec succès");
        navigate("/admin");
      })
      .catch((err) => {
        console.error("Erreur modification :", err);
        alert("Une erreur s'est produite");
      });
  };

  return (
    <div style={{  minHeight: "100vh", paddingTop: "50px" }}>
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{
          color: "#4e4e4e",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}>
          Modifier une voiture
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-sm bg-light"
        >
          <div className="mb-3">
            <label className="form-label fw-bold">Matricule</label>
            <input
              type="text"
              name="matricul"
              className="form-control"
              value={voiture.matricul}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Marque</label>
            <input
              type="text"
              name="marque"
              className="form-control"
              value={voiture.marque}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Prix (DH)</label>
            <input
              type="number"
              name="prix"
              className="form-control"
              value={voiture.prix}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Statut</label>
            <select
              name="status"
              className="form-select"
              value={voiture.status}
              onChange={handleChange}
              required
            >
              <option value="">-- Choisir --</option>
              <option value="disponible">Disponible</option>
              <option value="loué">Loué</option>
              <option value="en panne">En panne</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Image</label>
            <input
              type="file"
              name="img"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          {voiture.img && typeof voiture.img === "string" && (
            <div className="mb-3 text-center">
              <img
                src={`http://localhost:3000/uploads/${voiture.img}`}
                alt="voiture"
                style={{
                  maxHeight: "150px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
                }}
              />
            </div>
          )}

          <button type="submit" className="btn btn-dark w-100">
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modifiervoiture;