import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">Generasi E-BOOK</h2>
            <p className="fs-17">
              Selamat datang di era revolusi literasi: generasi E-book. Dalam dunia yang semakin terhubung secara digital, E-book telah mengubah cara kita membaca dan mengakses informasi. Dengan hanya perangkat elektronik di tangan kita,
              perpustakaan pribadi penuh dengan buku-buku favorit kita dapat dibawa ke mana saja. Dari klasik hingga terbitan terbaru, semua itu hanya dalam genggaman. Tidak hanya memberikan kenyamanan membaca di mana saja dan kapan saja,
              generasi E-book juga membuka pintu bagi interaktivitas, dengan fitur-fitur seperti pencarian teks dan anotasi. Ini adalah era di mana imajinasi bertemu dengan teknologi, dan penulis serta karya-karya baru diberi kesempatan
              untuk bersinar. <br></br> Generasi E-book adalah keajaiban digital yang mengubah cara kita melibatkan diri dalam dunia kata-kata, menawarkan kebebasan, kemudahan, dan petualangan tak terbatas di setiap halaman. Selamat datang di era
              E-book, di mana cerita tak berujung menanti untuk ditemukan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
