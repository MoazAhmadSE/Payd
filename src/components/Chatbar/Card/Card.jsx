import randomColor from "randomcolor";
import moment from "moment";
import "./Card.css";
import * as Icon from "../../../assets/icons/Card/index";

function getColorFromFirstLetter(letter) {
  return randomColor({
    seed: letter,
    luminosity: "bright",
  });
}

export default function Card({
  messageid,
  userName,
  message,
  timeStamp,
  isOpen,
  handleClick,
}) {
  const bgColor = getColorFromFirstLetter(userName[0].toUpperCase());

  return (
    <>
      <div
        className={`cardContainer ${isOpen ? "" : "unread"}`}
        onClick={() => handleClick(messageid)}
      >
        <div className="cardTop">
          <div className="cardNameIcon" style={{ backgroundColor: bgColor }}>
            {userName[0].toUpperCase()}
          </div>
          <div className="cardTime">
            {moment(timeStamp).calendar(null, {
              sameDay: "[Today], h:mma",
              lastDay: "[Yesterday], h:mma",
              lastWeek: "ddd, h:mma",
              sameElse: "MMM D, h:mma",
            })}
          </div>
        </div>
        <div className="cardButtom">
          <div className="cardNameAndMessage">
            <div className="cardName">{userName}</div>
            <div className="CardMessage">
              {message.substring(0, 30) + "..."}
            </div>
          </div>
          <div className="CardIcon">
            <Icon.Right />
          </div>
        </div>
      </div>
    </>
  );
}
