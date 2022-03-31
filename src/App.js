import React from "react";
import './style.css'
import Adresse from "./Component/profile/Address";
import FullName from "./Component/profile/FullName";
import MyPicture from "./Component/profile/ProfilePhoto";
import Annexe from "./Annexe";


const App = () => (
  <>
  <div className="container">

<div><MyPicture />
<FullName /></div> 
    <div><Adresse /></div>
    
  </div>
    <div className="second">
<Annexe/>
      </div>
  </>
    );
export default App;