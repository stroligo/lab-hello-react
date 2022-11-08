import "./App.css";
import "./index.css";
import Card from "./components/Card";

import logoSite from "./img/ironhack-logo-xs.png";
import menuBtn from "./img/menu-top-xs.png";
import background from "./img/bgreact.png";

import imgCard1 from "./img/icon1.png";
import imgCard2 from "./img/icon2.png";
import imgCard3 from "./img/icon3.png";
import imgCard4 from "./img/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="content">
        <section className="App-header">
          <div className="nav" id="nav">
            <img src={logoSite} alt="Logo Site" id="logo"></img>
            <img src={menuBtn} alt="Menu Botão"></img>
          </div>
        </section>
        <section
          className="App-intro"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="intro">
            <h1>Say hello to React JS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a suer Ninja Developer
            </p>
            <div className="btn" id="awesome">
              Awesome!
            </div>
          </div>
        </section>
        <section>
          <div className="area-card">
            <Card
              imgUrl={imgCard1}
              title="Declarative"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
            />
            <Card
              imgUrl={imgCard2}
              title="Components"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
            />
            <Card
              imgUrl={imgCard3}
              title="Single-Way"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
            />
            <Card
              imgUrl={imgCard4}
              title="JSX"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
