import { UserData } from "../utils/DashboardData/UserData";
import { Messages } from "../utils/DashboardData/Messages";
import { Notification, upadateNofData } from "../utils/DashboardData/Notifications";

const functions = {
    user: UserData,
    messages: Messages,
    notifications: Notification,
};
const updateNotification = {
    upadateNofData: (index) => upadateNofData(index),
};

const DashboardApi = async (data) => {
    return await functions[data];
};
const updateNotificationData = async (data, index) => {
    return await updateNotification[data](index);
}

export { DashboardApi, updateNotificationData };