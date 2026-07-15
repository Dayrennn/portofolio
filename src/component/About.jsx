import React from 'react';
import profileImg from '../assets/profile.jpg';
import ButtonConfirm from './Buttons/ButtonCnfrm';

import '../styles/About.css';
import Skills from './Skill';

function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>Tentang Saya</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-img">
                            <img src={profileImg} alt="Profile" />
                        </div>
                        <div className="about-text">
                            <h3>Web Developer Enthusiast</h3>
                            <p>
                                Saya adalah seorang Fullstack Web Developer yang berfokus pada pengembangan aplikasi web
                                modern. Berpengalaman menggunakan Next.js, Express.js, PostgreSQL, dan Prisma untuk
                                membangun aplikasi yang scalable, responsive, dan mudah dikelola. Saya percaya bahwa
                                kode yang bersih, performa yang optimal, dan pengalaman pengguna yang baik merupakan
                                bagian penting dari setiap proyek yang saya kerjakan. Saat ini saya juga sedang
                                mempelajari Golang untuk memperluas kemampuan dalam membangun backend berperforma
                                tinggi.
                            </p>
                            <Skills />
                            <ButtonConfirm>Hubungi Saya</ButtonConfirm>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
