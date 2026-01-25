import React from "react";
import trimitra from "../assets/trimitra.jpg";
import endaymotor from "../assets/endaymotor.jpg";
import endaycuci from "../assets/endaycuci.jpg";
import dapps from "../assets/dapps.jpg";
import comingsoon from "../assets/comingsoon.jpg";
import "../styles/Project.css";

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: trimitra,
      alt: "trimitra",
      title: "Sistem Informasi Pergudangan",
      description:
        "Sistem yang dibuat untuk PT.Trimitra Abadi Lestari dengan manajemen inventory real-time serta notifikasi untuk stok hampir habis",
      tags: ["PHP", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/Dayrennn/Sistem-Pergudangan",
    },
    {
      id: 2,
      image: endaymotor,
      alt: "endaymotor",
      title: "Sistem Penjualan Motor",
      description:
        "Sistem ini dibuat sebagai project mandiri dengan fitur data motor, booking, hingga pembayaran. Sistem ini sudah menggunakan framework laravel.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/Dayrennn/enday-motor",
    },
    {
      id: 3,
      image: endaycuci,
      alt: "endaycuci",
      title: "Sistem Cuci Motor",
      description:
        "Sistem ini masih tahap <b>pengembangan</b>, sistem ini sudah menggunakan react.js dengan rencana menggunakan bahasa backend golang.",
      tags: ["React.js", "Golang", "Bootstrap"],
      githubUrl: "https://github.com/Dayrennn/cuci-motor",
    },
    {
      id: 4,
      image: dapps,
      alt: "dapps",
      title: "Avalanche dApp",
      description:
        "Sistem ini dibuat dengan mengikuti webinar yang di selenggarakan oleh avalanche. Project ini sudah di tahap UI namun masih berlanjut untuk backend nya.",
      tags: ["Web3", "Express.js", "Nest.js"],
      githubUrl: "https://github.com/Dayrennn/Webinar-Fullstack-dApps/day-3",
    },
    {
      id: 5,
      image: comingsoon,
      alt: "comingsoon",
      title: "Sistem Siswa Terbaik",
      description:
        "Sistem ini merupakan proyek skripsi yang masih dalam tahap pengembangan. Pada sisi antarmuka, sistem direncanakan menggunakan React.js, sedangkan pada sisi backend dibangun menggunakan Node.js dengan framework Express.js dan bahasa TypeScript untuk mengelola logika sistem dan pengolahan data.",
      tags: ["React.js", "TypeScript", "Node.js", "Express.js"],
      githubUrl: "/404",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="section-title">
          <h2>Portofolio</h2>
        </div>
        <div className="portofolio-grid">
          {portfolioItems.map((item) => (
            <div className="portofolio-item" key={item.id}>
              <div className="portofolio-img">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="portofolio-info">
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />

                {/* Tags Section */}
                <div className="portofolio-tags">
                  {item.tags.map((tag, index) => (
                    <span className="portofolio-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={item.githubUrl}
                  className="btn portofolio-btn"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
