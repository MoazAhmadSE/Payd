import { useT } from "../../../context/TranslationContext";
import greeting from "../../../assets/Images/greeting.png";
import { useUser } from "../../../context/UserInfo";
import "./Greeting.css";

export default function Greeting() {
  const t = useT();
  const { user } = useUser();

  if (!user) return null;
  return (
    <div className="greeting">
      <img src={greeting} className="greetingImage wave" alt="Greeting" />
      <h2 className="name">
        {t("greeting", { name: user.name.split(" ")[0] })}
      </h2>
    </div>
  );
}
