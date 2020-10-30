/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import HeaderCom from "./header/header";

function App() {
  return (
    <div>
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
      <div className="container">
      </div>
      <div class="footer">
      <div class="container">
        <div class="footer-row">
          <div class="footer-copyright">
            <div class="footer-copyright-name">COMINFO</div>
            <p>Сопровождение вашего бизнеса</p>
          </div>
          <div class="footer-icons">
            <p>Мы в социальных сетях</p>
            <div class="footer-icon-link">
              <a href="#"><img src="./img/footer/facebook-f 1.svg" /></a>
              <a href="#"><img src="./img/footer/instagram 1.svg" /></a>
              <a href="#"><img src="./img/footer/linkedin-in-brands.svg" /></a>
              <a href="#"><img src="./img/footer/github-brands.svg" /></a>
              <a href="#"><img src="./img/footer/vk-brands 1.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      
      
    </div>
  );
}

export default App;
