import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nouvelvoiture() {
  const [matricul, setMatricul] = useState("");
  const [marque, setMarque] = useState("");
  const [prix, setPrix] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // تنظيف URL المعاينة عند تغيير الصورة
  useEffect(() => {
    return () => {
      if (imageFile) {
        URL.revokeObjectURL(imageFile);
      }
    };
  }, [imageFile]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("matricul", matricul);
    formData.append("marque", marque);
    formData.append("prix", prix);
    formData.append("image", imageFile); // الاسم يجب أن يطابق اسم الحقل في multer

    try {
      await axios.post("http://localhost:3000/voiture/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("🚗 Voiture ajoutée avec succès !");
      setMatricul("");
      setMarque("");
      setPrix("");
      setImageFile(null);
      setTimeout(() => navigate("/admin"), 2000);
    } catch (err) {
      console.error(err);
      setError("❌ Erreur lors de l'ajout de la voiture.");
    }
  };

  return (
<div className="container mt-5" style={{ maxWidth: '600px' }}>
  <h1 className=" text-center mb-4">Nouvelle voiture</h1>

  {message && <div className="alert alert-success">{message}</div>}
  {error && <div className="alert alert-danger">{error}</div>}

  <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
    <div className="mb-3">
      <label className="form-label">Matricule</label>
      <input
        type="text"
        className="form-control"
        value={matricul}
        onChange={(e) => setMatricul(e.target.value)}
        required
        placeholder="Ex: 1234-AB-56"
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
        placeholder="Ex: Toyota"
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
        min={0}
        placeholder="Ex: 500"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Image</label>
      <input
        type="file"
        className="form-control"
        onChange={(e) => setImageFile(e.target.files[0])}
        accept="image/*"
        required
      />
    </div>

    {imageFile && (
      <div className="mb-3 text-center">
        <img
          src={URL.createObjectURL(imageFile)}
          alt="voiture"
          style={{ maxHeight: "200px", borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.2)' }}
        />
      </div>
    )}

    <button type="submit" className="btn  w-100" style={{ backgroundColor: '#8a817c',color:'white'}} >
      Ajouter la voiture
    </button>
  </form>
</div>
  );
}

export default Nouvelvoiture;