import React from "react";
import "./footer.css";

const Footercom = () => {
    return (
    <div class="footer">
      <div class="container">
        <div class="footer-row">
          <div class="footer-copyright">
            <div class="footer-copyright-name">COMINFO</div>
            <p>Аудит и Сопровождение бизнеса</p>
          </div>
          <div class="footer-icons">
            <p>Мы в социальных сетях</p>
            <div class="footer-icon-link">
              <a href="#"><img src="./../logo2.png" /></a>
              <a href="#"><img src="./../logo.svg" /></a>
              <a href="#"><img src="./../logo.svg" /></a>
              <a href="#"><img src="./../logo.svg"/></a>
              <a href="#"><img src="./../logo.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Footercom;