import React from "react";
import "../styles/Kontak.css";
import ButtonConfirm from "./Buttons/ButtonCnfrm";
import MdiLocationsOutline from "./Icons/Location";
import MynauiTelephone from "./Icons/Telephone";

function Kontak() {
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
                <MynauiTelephone
                  icon="mynaui:telephone"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact-text">
                <h3>Telepon</h3>
                <p>+62 812-1854-7384</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form id="contactForm">
              <div className="form-group">
                <input type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Alamat Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subjek" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Pesan"
                ></textarea>
                <ButtonConfirm>Kirim Pesan</ButtonConfirm>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
