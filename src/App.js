import Card from "./components/Container";
import card from './res/card.jpg';

import exodia from './res/photo.jpg'

import "./App.scss";
function App() {
  return <>
    <Card
      attack="1000"
      attributes="SPELLCASTER / EFFECT"
      cardnumber="LOB-E101"
      defense="1000"
      serial="33396948"
      description="An automatic victory can be declared by the player whose hand contains this card together with the Left Leg/Right Leg/Left Arm/Right Arm of the Forbidden One."
      image={exodia}
      stars="3"
      name="EXODIA THE FORBIDDEN ONE"
    />
    <img className="demo" alt="demo" src={card}/>
  </>;
}

export default App;
