import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Listvoitures() {
    const [voitures, setVoitures] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/voiture')
            .then(res => setVoitures(res.data))
            .catch(err => console.error(err));
    }, []);

    const sortedVoitures = () => {
        if (!sortBy) return voitures;

        let sorted = [...voitures];
        if (sortBy === "marque") {
            sorted.sort((a, b) => a.marque.localeCompare(b.marque));
        } else if (sortBy === "prix") {
            sorted.sort((a, b) => a.prix - b.prix);
        } else if (sortBy === "status") {
            sorted.sort((a, b) => a.status.localeCompare(b.status));
        }

        return sorted;
    };

    return (
        <div style={{ backgroundColor: '#bcb8b1', minHeight: '100vh', paddingTop: '30px', paddingBottom: '30px' }}>
            <div className="container">
                <h1 className='text-center mb-4 text-dark'>Liste des Voitures</h1>

                <div className="mb-4 d-flex justify-content-center">
                    <select
                        className="form-select w-50 mx-auto mb-4"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{
                            backgroundColor: '#8a817c',  // نفس لون الـ navbar/footer
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            fontWeight: 'bold',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="">-- Trier les voitures --</option>
                        <option value="marque">Par Marque</option>
                        <option value="prix">Par Prix</option>
                        <option value="status">Par Status</option>
                    </select>
                </div>

                <div className='row'>
                    {sortedVoitures().map((voiture) => (
                        <div key={voiture.id} className='col-md-4 mb-4'>
                            <div className="card shadow h-100" style={{ backgroundColor: '#8a817c', color: '#f4f3ee' }}>
                                {voiture.img && (
                                    <img
                                        src={`http://localhost:3000/uploads/${voiture.img}`}
                                        alt="voiture"
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{voiture.marque}</h5>
                                    <p className="card-text"><strong>Matricule:</strong> {voiture.matricul}</p>
                                    <p className="card-text"><strong>Prix:</strong> {voiture.prix} DH</p>
                                    <p className="card-text"><strong>Status:</strong> {voiture.status}</p>
                                    <div className="mt-auto">
                                        <NavLink to={`/infovoiture/${voiture.id}`} className='btn btn-light w-100'>
                                            Voir Détails
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Listvoitures;