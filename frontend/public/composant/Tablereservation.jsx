import axios from "axios";
import { useEffect, useState } from "react";

function Tablereservation() {
    const [reservations, setReservations] = useState([]);

    // جلب الحجوزات
    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = () => {
        axios.get('http://localhost:3000/reservation')
            .then(res => setReservations(res.data))
            .catch(err => console.log(err));
    };

    // دالة لتحديث حالة الحجز
    const updateStatut = (id, newStatut) => {
        axios.put(`http://localhost:3000/reservation/${id}`, { statut: newStatut })
            .then(() => {
                fetchReservations(); // إعادة تحميل القائمة بعد التحديث
            })
            .catch(err => console.error("Erreur lors de la mise à jour du statut :", err));
    };

    return (
        <div>
            
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#4e4e4e', fontWeight: 'bold' }}>
                    Liste des Reservations
                    
                </h2>
                <table className="table table-striped table-hover table-bordered mt-4 text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Utilisateur</th>
                            <th>Voiture</th>
                            <th>Date Début</th>
                            <th>Date Fin</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reserv, index) => (
                            <tr key={reserv.id}>
                                <td>{index + 1}</td>
                                <td>{reserv.userid}</td>
                                <td>{reserv.voitureid}</td>
                                <td>{reserv.date_debut}</td>
                                <td>{reserv.date_fin}</td>
                                <td className={
                                    reserv.statut === 'acceptée' ? 'text-success fw-bold' :
                                        reserv.statut === 'refusée' ? 'text-danger fw-bold' :
                                            'text-warning fw-bold'
                                }>
                                    {reserv.statut}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        {reserv.statut === 'en attente' ? (
                                            <div className="d-flex gap-2">
                                                <button
                                                    className="btn btn-success btn-sm"
                                                    onClick={() => updateStatut(reserv.id, 'acceptée')}
                                                >
                                                    Accepter
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => updateStatut(reserv.id, 'refusée')}
                                                >
                                                    Refuser
                                                </button>
                                            </div>
                                        ) : (
                                            <span className={
                                                reserv.statut === 'acceptée'
                                                    ? 'text-success fw-bold'
                                                    : 'text-danger fw-bold'
                                            }>
                                                Réservation {reserv.statut}
                                            </span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tablereservation;
