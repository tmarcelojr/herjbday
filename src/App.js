import herj from "./images/herjbday.png";
import restaurantLogo from './images/restaurants.png'
import Restaurants from "./components/Restaurants";
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <div className="image-container">
        <img src={herj} className="img-fluid herj" alt="herjhoeass" />
      </div>
      <img className="img-fluid" src={restaurantLogo} alt="restaurants logo" />
      <Restaurants />
    </div>
  );
}

export default App;
