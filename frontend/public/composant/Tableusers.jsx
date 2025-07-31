import axios from "axios";
import { useEffect, useState } from "react";

function Tableusers() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const supprimer = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer ce utilisateur ?")) {
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(() => {
                    alert("utilisateur supprimée");

                    axios.get('http://localhost:3000/users')
                        .then(res => setUsers(res.data))
                        .catch(err => console.log(err));

                })
                .catch(err => console.error(err));
        }
    };


    return (<div>
        
        <div className="container">
            <h2 className="text-center mb-4" style={{ color: '#4e4e4e', fontWeight: 'bold' }}>
                List des Utilisateurs
            </h2>
            <table className="table table-striped table-hover table-bordered mt-4 text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>prenom</th>
                        <th>telephon</th>
                        <th>email</th>

                        <th>role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.prenom}</td>
                            <td>{user.tele} </td>
                            <td>{user.email}</td>

                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => supprimer(user.id)} className="btn btn-sm btn-outline-danger">supprimer</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>)
}
export default Tableusers;