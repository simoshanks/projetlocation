import React, { useState, useEffect } from "react";
import axios from "axios";
function Infopersonel() {
const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: '',
    prenom: '',
    tele: '',
    email: '',
    password: ''
  });
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setForm({
        name: storedUser.name,
        prenom: storedUser.prenom,
        tele: storedUser.telephon || storedUser.tele || '',
        email: storedUser.email,
        password: ''
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPasswordInput(!showPasswordInput);
    if (showPasswordInput) {
      // إذا غلقنا الحقل، نفضي كلمة المرور
      setForm(prev => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // إرسال التحديث إلى السيرفر
      await axios.put(`http://localhost:3000/users/${user.id}`, form);

      // تحديث حالة المستخدم محليًا
      const updatedUser = { ...user, ...form };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setMessage("Profil mis à jour avec succès !");
      setForm(prev => ({ ...prev, password: '' }));
      setShowPasswordInput(false); // إخفاء الحقل بعد التحديث
    } catch (err) {
      console.error(err);
      setMessage("Erreur lors de la mise à jour.");
    }
  };

  if (!user) {
    return <div className="alert alert-warning">Veuillez vous connecter.</div>;
  }
    return (<div className="container mt-5">
        <h1 className="text-center ">Votre profil</h1>
        <h2 className="text-center text-primary">Information personel</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
            {/* الحقول العادية */}
            <div className="mb-3">
                <label>Nom</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label>Prénom</label>
                <input type="text" name="prenom" value={form.prenom} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label>Téléphone</label>
                <input type="text" name="tele" value={form.tele} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
            </div>

            {/* زر إظهار/إخفاء حقل كلمة المرور */}
            <button type="button" className="btn btn-link mb-3" onClick={handleTogglePassword}>
                {showPasswordInput ? "Annuler la modification du mot de passe" : "Modifier le mot de passe"}
            </button>

            {/* حقل كلمة المرور يظهر فقط عند الضغط */}
            {showPasswordInput && (
                <div className="mb-3">
                    <label>Mot de passe</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control" />
                </div>
            )}

            <button type="submit" className="btn btn-primary">Mettre à jour</button>
        </form>
    </div>)
}
export default Infopersonel;