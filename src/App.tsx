import Header from "./components/Header/Header";
import { ReactComponent as Ganesha } from "./assets/ganesha.svg";

import "./App.scss";
import Icon from "./components/Icon/Icon";
import Event from "./components/Event/Event";

function App() {
  return (
    <>
      <Header></Header>
      <div className="style-normal content">
        <Icon className="content__top-icon">
          <Ganesha />
        </Icon>

        <section className="content__invite invite">
          <p>Join us to celebrate our wedding</p>
          <section className="invite__couple-info style-cursive">
            <p className="neon-text">Harikrishnan</p>
            <p>&</p>
            <p className="neon-text">Sreelakshmi</p>
          </section>
        </section>

        <section className="venue">
          <Event
            title="Wedding"
            dateTime="2023-07-06T11:30:00"
            dateTimeDisplayValue="July 6, 2023 from 11.30 AM to 12.00 PM"
            locationDisplayValue="Subramaniyam hall (Trivandrum club), Vazhuthacaud,
                Thiruvananthapuram"
            locationQuery="P. Subramaniam Hall, Vellayambalam"
            locationPlaceId="ChIJ5VIQfMq7BTsRZdG2rhi0DG0"
            className="venue__wedding"
          />

          <Event
            title="Reception"
            dateTime="2023-07-06T17:00:00"
            dateTimeDisplayValue="July 6, 2023 from 05.00 PM onwards"
            locationDisplayValue="BM Convention Centre, Ambalathara,
                Thiruvananthapuram"
            locationQuery="BM Convention Centre, Ambalathara"
            locationPlaceId="ChIJ513x7jq7BTsRqcxE-nhuiNI"
            className="venue__reception"
          />
        </section>
      </div>
    </>
  );
}

export default App;
