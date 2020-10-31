import React from "react";
import './header.css';

const HeaderCom = () => {
  return (
    <div className='header'>
      <div className="header-wrapper">
        <div className='header-top'>
          <div className="header-logo">
            <p><a href='/home'>ComInfo</a></p>
          </div>
          
          <div className="header-tel">
            <p className="header-tel-text">87059727904</p>
          </div>
        </div>
      </div>
      <div className="header-menu">
          <ul>
            <li>
              <a href="/home" className="menu-link">Главная</a>
            </li>
            <li><a href="/uslugi" className="menu-link">Услуги</a></li>
            <li>
              <a href="/contacts" className="menu-link">
                Контакты
              </a>     
            </li>
          </ul>
        </div>
      </div>
  );
};

export default HeaderCom;
