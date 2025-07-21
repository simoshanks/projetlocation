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
  img: "",
  status: ""
});

  useEffect(() => {
    axios.get(`http://localhost:3000/voitures/${id}`)
      .then((res) => setVoiture(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/voitures/${id}`, voiture)
      .then(() => {
        alert("Voiture modifiée");
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Modifier Voiture</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Matricule</label>
          <input type="text" name="matricul" className="form-control" value={voiture.matricul} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Marque</label>
          <input type="text" name="marque" className="form-control" value={voiture.marque} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Prix</label>
          <input type="number" name="prix" className="form-control" value={voiture.prix} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Image</label>
          <input type="text" name="img" className="form-control" value={voiture.img} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <select name="status" className="form-control" value={voiture.status} onChange={handleChange}>
            <option value="">-- Choisir --</option>
            <option value="disponible">Disponible</option>
            <option value="réservée">Réservée</option>
            <option value="hors service">Hors service</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Modifier</button>
      </form>
    </div>
  );
}

export default Modifiervoiture;
