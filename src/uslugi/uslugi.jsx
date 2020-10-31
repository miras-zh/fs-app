import React from "react";
import "./uslugi.css";

const Uslugi = () => {
    return (
    <div className="home">
      <div className="home-slider">
          
          <form action="" className="home-slider-form">
              <p>Отправить заявку</p>
            <label className="form-item-text">Ваше имя</label>
            <input type="text" placeholder="Введите имя"/><br/>
            <label className="form-item-text">Ваш телефон</label>
            <input type="text" placeholder="Номер телефона"/><br/>
            <label className="form-item-text">Ваш email</label>
            <input type="text" placeholder="email"/><br/>
            
            <button>Отправить</button>
          </form>
      </div>
      <div className="home-about">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo ipsum dolores beatae? Nisi aliquam eligendi veniam neque a exercitationem, maiores facere temporibus obcaecati in nostrum, accusantium aspernatur deleniti voluptate!</p>
      </div>
      <div className="home-text">
        <div className="home-text-items">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste optio vero facere eum eos ex aliquid deserunt nobis molestiae minima ab quod assumenda, doloremque porro in, rerum vitae amet necessitatibus?</div>
        <div className="home-text-items">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste optio vero facere eum eos ex aliquid deserunt nobis molestiae minima ab quod assumenda, doloremque porro in, rerum vitae amet necessitatibus?</div>
      </div>
    </div>
    );
  };
  
  export default Uslugi;