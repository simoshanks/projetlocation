import { useEffect, useState } from "react";
import axios from "axios";

function Inforeserv() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // جلب المستخدم المسجل من localStorage
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.id) {
            axios.get(`http://localhost:3000/reservation/details`)
                .then(res => {
                    setReservations(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setError("Erreur lors du chargement des réservations");
                    setLoading(false);
                });
        } else {
            setError("Veuillez vous connecter.");
            setLoading(false);
        }
    }, []);
    const handleDelete = (id) => {
        if (window.confirm("anuler la reservation!")) {
            axios.delete(`http://localhost:3000/reservation/${id}`)
                .then(() => {
                    setReservations(prev => prev.filter(resv => resv.id !== id));
                })
                .catch(err => {
                    console.error(err);
                    alert("error de anulation");
                });
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary">Informations de réservation</h2>

            {reservations.length === 0 ? (
                <p>Aucune réservation trouvée.</p>
            ) : (
                <table className="table table-striped table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Voiture</th>
                            <th>marque</th>
                            <th>Date début</th>
                            <th>Date fin</th>
                            <th>Statut</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((resv, index) => (
                            <tr key={resv.id}>
                                <td>{index + 1}</td>
                                <td>{resv.matricul}</td>
                                <td>{resv.voiture_marque}</td>
                                <td>{resv.date_debut}</td>
                                <td>{resv.date_fin}</td>
                                <td>{resv.statut}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(resv.id)}
                                    >
                                        anuller
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Inforeserv;