import { Alarm, EventAttributes } from "ics";
import Header from "./components/Header/Header";
//@ts-ignore
import { ReactComponent as Ganesha } from "./assets/ganesha.svg";
import Icon from "./components/Icon/Icon";
import Event from "./components/Event/Event";

import "./App.scss";

const reminder: Alarm = {
  description: "Hari's wedding on July 6th",
  action: "display",
  trigger: { before: true, hours: 4, minutes: 30 },
};

const wedding: EventAttributes = {
  title: " Hari weds Sreelakshmi - Marriage",
  description: "Join the wedding celebration",
  duration: { minutes: 30 },
  start: [2023, 7, 6, 6, 0],
  startInputType: "utc",
  startOutputType: "local",
  location:
    "Subramaniyam hall (Trivandrum club), Vazhuthacaud, Thiruvananthapuram",
  alarms: [reminder],
  organizer: { name: "Harikrishnan" },
};

const reception: EventAttributes = {
  title: " Hari weds Sreelakshmi - Reception",
  description: "Join the reception",
  start: [2023, 7, 6, 11, 30],
  end: [2023, 7, 6, 15, 30],
  startInputType: "utc",
  startOutputType: "local",
  location: "BM Convention Centre, Ambalathara, Thiruvananthapuram",
  alarms: [reminder],
  organizer: { name: "Harikrishnan" },
};

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
            calendarInviteDetails={wedding}
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
            calendarInviteDetails={reception}
            className="venue__reception"
          />
        </section>
      </div>
    </>
  );
}

export default App;
