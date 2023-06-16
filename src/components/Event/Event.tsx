import { FC } from "react";
import { createEvent, EventAttributes } from "ics";
//@ts-ignore
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import Icon from "../Icon/Icon";

import "./Event.scss";

type EventProps = {
  dateTime: string;
  dateTimeDisplayValue: string;
  locationQuery: string;
  locationPlaceId: string;
  locationDisplayValue: string;
  title: string;
  className?: string;
  calendarInviteDetails?: EventAttributes;
};

const Event: FC<EventProps> = ({
  title,
  dateTime,
  dateTimeDisplayValue,
  locationQuery,
  locationPlaceId,
  locationDisplayValue,
  calendarInviteDetails,
  className,
}) => {
  async function handleDownload(event: EventAttributes) {
    const filename = `${event.title}.ics`;
    const file = await new Promise<File>((resolve, reject) => {
      createEvent(event, (error, value) => {
        if (error) {
          reject(error);
        }

        resolve(new File([value], filename, { type: "plain/text" }));
      });
    });
    const url = URL.createObjectURL(file);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }

  return (
    <article className={`event ${className}`}>
      <p className="event__title">{title}</p>
      <div className="event__details">
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
        {calendarInviteDetails && (
          <Icon
            className="event__calendar"
            title="Add to calendar"
            onClick={() => handleDownload(calendarInviteDetails)}
          >
            <Calendar />
          </Icon>
        )}
      </div>
    </article>
  );
};

export default Event;
