import React from "react";
import './header.css';

const HeaderCom = () => {
  return (
    <div className='header'>
        <div className='header-top'>
          <div className="header-logo">
            <p>ComInfo</p>
          </div>
          
          <div className="header-tel">
            <p>87059727904</p>
          </div>
        </div>
      
        <div className="header-menu">
          <ul>
            <li>
              <a href="" className="menu-link">Главная</a>
            </li>
            <li><a href="" className="menu-link">Услуги</a></li>
            <li>
              <a href="" className="menu-link">
                Контакты
              </a>     
            </li>
          </ul>
        </div>
      </div>
  );
};

export default HeaderCom;
