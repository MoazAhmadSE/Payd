import "../css/HomePage.css";
import { useEffect, useState } from "react";
import { fetchHomePageData } from "../api/HomePageApi";
import Earning from "../components/HomePage/Earning/Earning";
import EarningGraph from "../components/HomePage/EarningGraph/EarningGraph";
import Greeting from "../components/HomePage/Greeting/Greeting";
import PaymentIssues from "../components/HomePage/PaymentIssues/PaymentIssues";
import SucessRate from "../components/HomePage/SucessRate/SucessRate";

export default function HomePage() {
  const [homeData, setHomeData] = useState();

  async function fetchData() {
    try {
      const data = await fetchHomePageData();
      setHomeData(data.HomePageData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <Greeting />
        <Earning totalEarning={homeData?.EarnedNGN?.data?.earnedNGN} />
      </div>

      <div className="graphContainer">
        <div className="earning">
          <EarningGraph earningsData={homeData?.EarningsData} />
        </div>

        <div className="bottomRow">
          <SucessRate sucessRatio={homeData?.SucessRatio?.data}/>
          <PaymentIssues paymentErrors={homeData?.Errors?.data} />
        </div>
      </div>
    </div>
  );
}
