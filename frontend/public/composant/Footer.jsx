function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #7f7a72, #8a817c)',
        color: '#f4f3ee',
        fontSize: '14px',
      }}
      className="text-center py-4 mt-5"
    >
      <div className="container">
        <p className="mb-2">&copy; 2025 Azicare. Tous droits réservés.</p>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f4f3ee', margin: '0 10px', fontSize: '20px' }}
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f4f3ee', margin: '0 10px', fontSize: '20px' }}
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f4f3ee', margin: '0 10px', fontSize: '20px' }}
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f4f3ee', margin: '0 10px', fontSize: '20px' }}
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;