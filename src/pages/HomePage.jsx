import Earning from "../components/HomePage/Earning/Earning";
import EarningGraph from "../components/HomePage/EarningGraph/EarningGraph";
import Greeting from "../components/HomePage/Greeting/Greeting";
import PaymentIssues from "../components/HomePage/PaymentIssues/PaymentIssues";
import SucessRate from "../components/HomePage/SucessRate/SucessRate";
import "../css/HomePage.css";

export default function HomePage() {
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <Greeting />
        <Earning />
      </div>

      <div className="graphContainer">
        <div className="earning">
          <EarningGraph />
        </div>

        <div className="bottomRow">
            <SucessRate />
            <PaymentIssues/>
        </div>
      </div>
    </div>
  );
}
