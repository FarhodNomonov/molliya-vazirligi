import React from "react";
import "./header.css";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="..." />
      </div>
      <div className="header_btn">
        <h2>
          ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИ ҲУЗУРИДАГИ ДАВЛАТ ХИЗМАТИНИ
          РИВОЖЛАНТИРИШ АГЕНТЛИГИ
        </h2>
      </div>
    </div>
  );
}

export default Header;
