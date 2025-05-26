import { useUser } from "../../context/UserInfo";
import "./Earning.css";

export default function Earning(){
    const { user } = useUser();
    return(
        <h2 className="earnings">You earned NGN { user.earnedNGN.toLocaleString('en-US') } this mounth.</h2>
    );
}