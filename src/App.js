/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import HeaderCom from "./header/header";
import Footercom from "./footer/footer";
import Home from "./Home/Home";
import Uslugi from "./uslugi/uslugi";
import Contacts from "./contacts/contacts";
import {Route, BrowserRouter}from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderCom />
          <div className='content-wrapper'>
            <Route path="/home" render={() => <Home  />}/>    
            <Route path="/uslugi" render={() => <Uslugi  />}/>    
            <Route path="/contacts" render={() => <Contacts  />}/>    
          </div>
        <Footercom />
      </div>
    </BrowserRouter>
  );
}

export default App;
