import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div>
      <Header />
      <div class="container">
        <div class="left">
          <div class="line1">
            <div class={switch1 ? 'btn-off' : 'btn-on'} onClick={() => setSwitch1(true)} >ON</div>
            <div class={switch1 ? 'btn-on' : 'btn-off'} onClick={() =>setSwitch1(false)}>OFF</div>
          </div>
          <div class="line2">
          <div class={switch2 ? 'btn-off' : 'btn-on'} onClick={() => setSwitch2(true)} >ON</div>
            <div class={switch2 ? 'btn-on' : 'btn-off'} onClick={() =>setSwitch2(false)}>OFF</div>
          </div>
          <div class="line3">
          <div class={switch3 ? 'btn-off' : 'btn-on'} onClick={() => setSwitch3(true)} >ON</div>
            <div class={switch3 ? 'btn-on' : 'btn-off'} onClick={() =>setSwitch3(false)}>OFF</div>
          </div>
        </div>
        <div class="right">
          {switch1 && switch2 && switch3 ? <div class="btn-result bg-green" >Goooooo !</div>  :  <div class="btn-result bg-red" >No way !</div>}
     
        </div>
      </div>
<Footer />
    </div>
  );
}

export default App;
