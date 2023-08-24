import herj from "./images/herjbday.png";
import friday from './images/friday.png'
import Itinerary from "./components/Itinerary";
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <div className="image-container">
        <img src={herj} className="img-fluid herj" alt="herjhoeass" />
      </div>
      <img className="img-fluid" src={friday} alt="friday logo" />
      <div className="text-center text-danger p-2">
        <strong>🔴 WEAR RED 🔴</strong>
      </div>
      <Itinerary />
    </div>
  );
}

export default App;
