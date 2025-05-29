import { getEarningsData } from "../utils/HomeData/EarningData"
import { EarnedNGN } from "../utils/HomeData/EarnedNGN"
import { SucessRatio } from "../utils/HomeData/SucessRatio"
import { Errors } from "../utils/HomeData/Errors";

export const fetchHomePageData = () => {
    return {
        HomePageData: {
            EarnedNGN: EarnedNGN,
            EarningsData: {
                "Today": getEarningsData("Today"),
                "This Week": getEarningsData("This Week"),
                "Last 2 Weeks": getEarningsData("Last 2 Weeks"),
                "This Month": getEarningsData("This Month"),
                "This Year": getEarningsData("This Year"),
                "Lifetime": getEarningsData("Lifetime"),
            },
            SucessRatio: SucessRatio,
            Errors: Errors,
        }
    }
}