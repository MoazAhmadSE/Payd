import { UserData } from "../utils/DashboardData/UserData";
import { Messages } from "../utils/DashboardData/messages";

export const fetchDashboardData = () => {
    return {
        DashboardDataApi: {
            user: UserData,
            messages: Messages,
        }
    };
};
