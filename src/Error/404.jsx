import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Impor CSS dari folder styles

function Error404() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-animation">
          <div className="error-digit">4</div>
          <div className="error-zero">
            <div className="zero-circle"></div>
          </div>
          <div className="error-digit">4</div>
        </div>

        <h1 className="error-title">Halaman Tidak Ditemukan</h1>
        <p className="error-message">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>

        <div className="action-buttons">
          <Link to="/" className="btn-home">
            <span className="btn-icon">🏠</span>
            Kembali ke Beranda
          </Link>

          <button className="btn-back" onClick={() => window.history.back()}>
            <span className="btn-icon">↶</span>
            Kembali Sebelumnya
          </button>

          <a
            href="https://github.com/Dayrennn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <span className="btn-icon">👨‍💻</span>
            Kunjungi GitHub
          </a>
        </div>

        <div className="suggestions">
          <p>Halaman yang tersedia:</p>
          <div className="available-links">
            <Link to="/">Beranda</Link>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>© {new Date().getFullYear()} Dayren Portfolio</p>
        <p className="error-code">Error 404 • Page Not Found</p>
      </div>
    </div>
  );
}

export default Error404;
