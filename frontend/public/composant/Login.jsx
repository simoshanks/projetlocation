import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault();

        
        if (!email || !password) {
            setMessage("Veuillez remplir tous les champs.");
            return;
        }

        setLoading(true);
        axios.post('http://localhost:3000/auth/login', { email, password })
            .then(res => {
                const user = res.data;

                
                localStorage.setItem("user", JSON.stringify(user));
                setUser(user); 

                
                if (user.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/voiture');
                }
               
                window.location.reload();
            })
            .catch(err => {
                console.error("Erreur de connexion:", err);
                setMessage("Email ou mot de passe incorrect.");
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="container mt-5">
            <h2>Connexion</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="exemple@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>

                <button type="submit" className="btn" style={{background:'#3b4a6b',color:'white'}} disabled={loading}>
                    {loading ? "Connexion..." : "Se connecter"}
                </button>
            </form>

            {message && <div className="alert alert-danger mt-3">{message}</div>}
        </div>
    );
}

export default Login;