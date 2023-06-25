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
            <h2 className="about-title fs-26 ls-1">Apa itu GoBook?</h2>
            <p className="fs-17">
              GoBOOK adalah sebuah aplikasi pencarian buku yang inovatif dan praktis untuk memudahkan Anda menemukan dan menjelajahi berbagai judul buku favorit. Dengan antarmuka yang menarik dan mudah digunakan, aplikasi ini memberikan
              pengalaman pencarian yang lancar dan efisien. GoBOOK dilengkapi dengan fitur-fitur canggih yang memungkinkan Anda menemukan buku-buku dari koleksi yang luas dengan hasil pencarian yang akurat dan relevan. Aplikasi ini juga
              memberikan rekomendasi buku yang dipersonalisasi berdasarkan preferensi dan minat Anda. Dengan GoBOOK, Anda dapat dengan mudah menemukan bestseller, klasik, atau bahkan buku-buku yang tersembunyi. Aplikasi GoBOOK merupakan
              teman setia bagi para pembaca dan penggemar buku, membantu Anda menjelajahi dunia literatur dengan mudah dan menyenangkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
