import React, { useState } from "react";
import "../styles/Kontak.css";
import ButtonConfirm from "./Buttons/ButtonCnfrm";
import MdiLocationsOutline from "./Icons/Location";
import IcBaselineWhatsapp from "./Icons/Whatsapp";
import LineMdGithub from "./Icons/Github";
import LogosGoogleGmail from "./Icons/Gmail";

function Kontak() {
  // Hooks ditempatkan di atas komponen
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat link Gmail compose otomatis
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=raflyramandha789@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
    )}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Kontak</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <MdiLocationsOutline
                  icon="mdi:locations-outline"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact-text">
                <h3>Lokasi</h3>
                <p>Kabupaten Tangerang, Legok</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <IcBaselineWhatsapp
                  icon="ic:baseline-whatsapp"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact-text">
                <h3>Whatsapp</h3>
                <a href="https://wa.me/6281218547384">+62 812 1854 7384</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <LineMdGithub icon="line-md:github" width="24" height="24" />
              </div>
              <div className="contact-text">
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Dayrennn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Dayrennn
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <LogosGoogleGmail
                  icon="logos-google-gmail"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact-text">
                <h3>Gmail</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=raflyramandha789@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  raflyramandha789@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Form tetap sama persis */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nama Lengkap"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Alamat Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subjek"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Pesan"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <ButtonConfirm type="submit">Kirim Pesan</ButtonConfirm>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
