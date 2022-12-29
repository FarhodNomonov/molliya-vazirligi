import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main_title">
        <p>
          Ҳурматли номзод, танловнинг суҳбат босқичига хуш келибсиз. Сизга омад
          тилаймиз.
        </p>
      </div>
      <div className="main_content">
        <form>
          <div className="region_select">
            <select className="region">
              <option>Вилоят танланг</option>
              <option>Наманган вилояти</option>
              <option>Андижон вилояти</option>
              <option>Фарғона вилояти</option>
              <option>Сирдарё вилояти</option>
            </select>
          </div>
          <div className="region_select">
            <select className="region">
              <option>Йўналишни танлаш</option>
              <option>Наманган вилояти</option>
              <option>Андижон вилояти</option>
              <option>Фарғона вилояти</option>
              <option>Сирдарё вилояти</option>
            </select>
          </div>

          <button type="button" onClick={() => navigate("/codex")}>
            Саволлар руйхати
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
