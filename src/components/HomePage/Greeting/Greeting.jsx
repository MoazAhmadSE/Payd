import greeting from "../../../assets/Images/greeting.png";
import "./Greeting.css";

export default function Greeting() {
  const user = "Moaz Ahmad";
  return (
    <div className="greeting">
      <img src={greeting} className="greetingImage" alt="Greeting" />
      <h2 className="name">Hey {user.split(" ")[0]}!</h2>
    </div>
  );
}
