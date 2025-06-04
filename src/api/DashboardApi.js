import { UserData } from "../utils/DashboardData/UserData";
import { Messages, upadateMessData } from "../utils/DashboardData/Messages";
import { Notification, upadateNofData } from "../utils/DashboardData/Notifications";

const functions = {
    user: UserData,
    messages: Messages,
    notifications: Notification,
};
const updateNotification = {
    upadateNofData: (index) => upadateNofData(index),
};

const updateMessage = {
    upadateMessData: (index) => upadateMessData(index),
}

const DashboardApi = async (data) => {
    return Promise.resolve(functions[data]);
};
const updateNotificationData = async (data, index) => {
    return await updateNotification[data](index);
}

const updateMessageData = async (data, index) => {
    return await updateMessage[data](index);
}



export { DashboardApi, updateNotificationData, updateMessageData };