import moment from "moment";
import "./NotificationCard.css";

export default function NotificationCard({ data }) {
  return (
    <>
      <div
        className={`notificationCardContainer ${!data.isOpen ? "notOpen" : ""}`}
      >
        <div className="notificationCardTop">
          <div className="notificationCardName">{data.title}</div>
          <div className="notificationCardTime">
            {moment(data.timeStamp).calendar(null, {
              sameDay: "[Today], h:mma",
              lastDay: "[Yesterday], h:mma",
              lastWeek: "ddd, h:mma",
              sameElse: "MMM D, h:mma",
            })}
          </div>
        </div>
        <div className="notificationCardButtom">
          {data.message.substring(0, 60) + "..."}
        </div>
      </div>
    </>
  );
}
