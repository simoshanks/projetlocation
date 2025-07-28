import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Formreserve({ show, onClose, voitureid, user }) {
  const [form, setForm] = useState({
    userid: '',
    voitureid: '',
    date_debut: '',
    date_fin: '',
    statut: 'en attente'
  });

  useEffect(() => {
    if (user) {
      setForm(prev => ({ ...prev, userid: user.id }));
    }
  }, [user]);

  useEffect(() => {
    setForm(prev => ({ ...prev, voitureid }));
  }, [voitureid]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/reservation', form)
      .then(() => {
        alert("Réservation ajoutée avec succès !");
        onClose();
      })
      .catch(err => {
        console.error("❌ Erreur réservation:", err);
        alert("Échec de la réservation.");
      });
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: '#8a817c', color: '#f4f3ee' }}>
          <div className="modal-header border-0">
            <h5 className="modal-title">Réserver la voiture</h5>
            <button type="button" className="btn-close" onClick={onClose} style={{ filter: "invert(1)" }}></button>
          </div>

          {!user && (
            <div className="alert alert-warning text-center">
              Vous devez <NavLink to="/login" className="fw-bold text-decoration-underline">vous connecter</NavLink> pour réserver.
            </div>
          )}

          {user && (
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Date début</label>
                  <input
                    type="date"
                    name="date_debut"
                    className="form-control"
                    value={form.date_debut}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date fin</label>
                  <input
                    type="date"
                    name="date_fin"
                    className="form-control"
                    value={form.date_fin}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer border-0">
                <button type="submit" className="btn btn-light text-dark">Réserver</button>
                <button type="button" className="btn btn-outline-light" onClick={onClose}>Annuler</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formreserve;