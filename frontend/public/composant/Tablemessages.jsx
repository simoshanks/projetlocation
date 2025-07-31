import { useEffect, useState } from "react";
import axios from "axios";

function Tablemessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get("http://localhost:3000/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Erreur de chargement :", err));
  };

  const deleteMessage = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) {
      axios.delete(`http://localhost:3000/messages/${id}`)
        .then(() => {
          alert("Message supprimé avec succès.");
          fetchMessages(); // إعادة تحميل القائمة
        })
        .catch(err => {
          console.error("Erreur lors de la suppression :", err);
          alert("Une erreur est survenue lors de la suppression.");
        });
    }
  };

  return (
    <div style={{ backgroundColor: "#bcb8b1", minHeight: "100vh", paddingTop: "50px" }}>
      <div className="container py-5">
        <h2
          className="text-center mb-4"
          style={{
            color: "#4e4e4e",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}
        >
          Messages reçus
        </h2>

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered bg-light text-center shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <tr key={msg.id}>
                    <td>{index + 1}</td>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td className="text-start">{msg.message}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteMessage(msg.id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-muted">Aucun message trouvé</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tablemessages;