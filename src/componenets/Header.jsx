import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-between align-items-center ">
      <div className="container-fluid d-flex  align-items-center ">
        <div>
          <img
            style={{ width: "30px" }}
            className="img-fluid "
            src="data:image/png;base64,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"
            alt=""
          />
          <span className="navbar-brand mb-0 h1">Kitap Kurdu</span>
         </div>

        <div className="d-flex gap-3 ">
          <NavLink to={"/"}>Ana Sayfa</NavLink>
          <NavLink to={"/ürünler"}>Ürünler</NavLink>
          <NavLink to={"/kategori"}>Kategoriler</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
