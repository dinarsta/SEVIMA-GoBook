import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title">Cari Bukumu disini!</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Gobook adalah aplikasi yang memudahkan pengguna untuk menemukan, membaca, dan menyimpan koleksi buku digital terkini dengan antarmuka yang intuitif dan fitur-fitur penanda halaman yang praktis.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header

