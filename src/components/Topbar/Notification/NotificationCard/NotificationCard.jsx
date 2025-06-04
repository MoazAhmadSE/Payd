import moment from "moment";
import "./NotificationCard.css";

export default function NotificationCard({ data, onClick }) {
  return (
    <>
      <div
        className={`notificationCardContainer ${!data[1]?.isOpen ? "notOpen" : ""}`}
        onClick={() => onClick(data[0])}
      >
        <div className="notificationCardTop">
          <div className="notificationCardName">{data[1]?.title}</div>
          <div className="notificationCardTime">
            {moment(data[1]?.timeStamp).calendar(moment(), {
              sameDay: "[Today], h:mmA",
              lastDay: "[Yesterday], h:mmA",
              lastWeek: "ddd, h:mmA",
              sameElse: "MMM D, h:mmA",
            })}
          </div>
        </div>
        <div className="notificationCardButtom">
          {data[1]?.message?.substring(0, 60) + "..."}
        </div>
      </div>
    </>
  );
}
