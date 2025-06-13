import { getEarningsData } from "../utils/HomeData/EarningData"
import { EarnedNGN } from "../utils/HomeData/EarnedNGN"
import { SucessRatio } from "../utils/HomeData/SucessRatio"
import { Errors } from "../utils/HomeData/Errors";

export const fetchHomePageData = () => {
    return {
        HomePageData: {
            EarnedNGN: EarnedNGN,
            EarningsData: {
                "today": getEarningsData("today"),
                "thisWeek": getEarningsData("thisWeek"),
                "last2Weeks": getEarningsData("last2Weeks"),
                "thisMonth": getEarningsData("thisMonth"),
                "thisYear": getEarningsData("thisYear"),
                "lifetime": getEarningsData("lifetime"),
            },
            SucessRatio: SucessRatio,
            Errors: Errors,
        }
    }
}