function Apropos() {
  return (
    <div style={{ backgroundColor: '#bcb8b1', minHeight: '100vh', paddingTop: '50px' }}>
      <div className="container py-5">
        <h1
          className="text-center mb-5"
          style={{
            color: '#4e4e4e',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          À propos
        </h1>
        <p className="text-center" style={{ maxWidth: '700px', margin: 'auto', color: '#555', fontSize: '18px' }}>
          Bienvenue sur notre site de location de voitures. Nous nous engageons à fournir les meilleures
          options pour vos besoins de mobilité, avec qualité, confort et sécurité.
        </p>
      </div>

      <div className="container mb-4">
        <h2
          className="text-center mb-4"
          style={{
            color: '#4e4e4e',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          Notre localisation
        </h2>
        <div className="d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.936693357397!2d-6.566850092303416!3d31.962614112495203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda49b00746240c5%3A0x71e831d9c359307f!2z2YXZhti12Kkg2KfZhNi02KjYp9ioINij2LLZitmE2KfZhA!5e0!3m2!1sfr!2sma!4v1753805086332!5m2!1sfr!2sma"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Notre localisation"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Apropos;