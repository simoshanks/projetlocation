import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/messages', formData);
      setStatus({ success: res.data.message });
      setFormData({ name: '', email: '', message: '' }); // إعادة تعيين النموذج
    } catch (error) {
      setStatus({ error: error.response?.data?.error || 'خطأ في الإرسال' });
    }
  };

  return (
    <div style={{  minHeight: '100vh', paddingTop: '50px' }}>
      <div className="container py-5">
        <h1
          className="text-center mb-5"
          style={{
            color: '#4e4e4e',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          Contactez-nous
        </h1>

        {status?.success && <div className="alert alert-success">{status.success}</div>}
        {status?.error && <div className="alert alert-danger">{status.error}</div>}

        <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#4e4e4e', fontWeight: '500' }}>
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: '#4e4e4e', fontWeight: '500' }}>
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="exemple@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: '#4e4e4e', fontWeight: '500' }}>
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn  w-100" style={{background:'#3b4a6b',color:'white'}}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;