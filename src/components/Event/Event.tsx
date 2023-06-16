import { FC } from "react";

import "./Event.scss";

type EventProps = {
  dateTime: string;
  dateTimeDisplayValue: string;
  locationQuery: string;
  locationPlaceId: string;
  locationDisplayValue: string;
  title: string;
  className?: string;
};

const Event: FC<EventProps> = ({
  title,
  dateTime,
  dateTimeDisplayValue,
  locationQuery,
  locationPlaceId,
  locationDisplayValue,
  className,
}) => {
  return (
    <article className={`event ${className}`}>
      <p className="event__title">{title}</p>
      <address className="event__address">
        <time dateTime={dateTime}>{dateTimeDisplayValue}</time>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            locationQuery
          )}&query_place_id=${locationPlaceId}`}
          target="_blank"
          className="event__link"
        >
          {locationDisplayValue}
        </a>
      </address>
    </article>
  );
};

export default Event;
