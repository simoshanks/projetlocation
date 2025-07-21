import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nouvelvoiture() {
    const [matricul, setMatricul] = useState("");
    const [marque, setMarque] = useState("");
    const [prix, setPrix] = useState("");
    const [message, setMessage] = useState("");
    const [img, setImg] = useState("");
     const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/addvoiture", {
            matricul,
            marque,
            prix,
            img,
        })
            .then((res) => {
                setMessage("Voiture ajoutée avec succès !");
                setMatricul("");
                setMarque("");
                setPrix("");
                navigate('/admin');
            })
            .catch((err) => {
                console.error(err);
                setMessage("Erreur lors de l'ajout de la voiture.");
            });
    };

    return (<div>
        <h1 className="text-success text text-center">Nouvelle voiture</h1>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
                <label className="form-label">Matricule</label>
                <input
                    type="text"
                    className="form-control"
                    value={matricul}
                    onChange={(e) => setMatricul(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Marque</label>
                <input
                    type="text"
                    className="form-control"
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Prix (en DH)</label>
                <input
                    type="number"
                    className="form-control"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input
                    type="text"
                    className="form-control"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    required
                />
            </div>


            <button type="submit" className="btn btn-success w-100">
                Ajouter la voiture
            </button>
        </form>
    </div>)
}
export default Nouvelvoiture;