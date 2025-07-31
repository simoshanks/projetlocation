function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #3b4a6b, #556787)', 
        color: '#f4f3ee',
        fontSize: '14px',
      }}
      className="text-center py-4 mt-5"
    >
      <div className="container">
        <p className="mb-2">&copy; 2025 Azicare. Tous droits réservés.</p>
        <div>
          {["facebook", "twitter", "instagram", "linkedin"].map((network) => (
            <a
              key={network}
              href={`https://${network}.com`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#f4f3ee', margin: '0 10px', fontSize: '20px', transition: 'color 0.3s' }}
              aria-label={network.charAt(0).toUpperCase() + network.slice(1)}
              onMouseEnter={e => e.currentTarget.style.color = '#a8c0ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#f4f3ee'}
            >
              <i className={`bi bi-${network}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;