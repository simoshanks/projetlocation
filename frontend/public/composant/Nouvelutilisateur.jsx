import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nouvelutilisateur() {
     const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tele, setTele] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/auth/register", {
            name,
            prenom,
            tele,
            email,
            password
        })
            .then((res) => {
                setMessage(" votre compte a été créé  avec succès !");
                setName("");
                setPrenom("");
                setTele("");
                navigate('/admin');
            })
            .catch((err) => {
                console.error(err);
                setMessage("Erreur cree le compte.");
            });
    };
    return (<div>
        <h1 className="text-success text text-center">creer compte</h1>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
                <label className="form-label">name</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">prenom</label>
                <input
                    type="text"
                    className="form-control"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">telephon</label>
                <input
                    type="number"
                    className="form-control"
                    value={tele}
                    onChange={(e) => setTele(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>


            <button type="submit" className="btn btn-success w-100">
                cree un compte
            </button>
        </form>
    </div>)
}
export default Nouvelutilisateur;