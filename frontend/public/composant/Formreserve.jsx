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

    console.log("🚀 Payload envoyé:", form); // للتأكد من صحة البيانات المرسلة

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
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title">Réserver la voiture</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {!user && (
            <div className="alert alert-warning text-center">
              Vous devez <NavLink to="/login">vous connecter</NavLink> pour réserver.
            </div>
          )}

          {user && (
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label>Date début</label>
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
                  <label>Date fin</label>
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
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">Réserver</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Annuler</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formreserve;