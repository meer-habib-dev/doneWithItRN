// import { Notification } from "expo";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import expoPushToken from "../api/expoPushToken";
import { addNotificationReceivedListener } from "expo-notifications";
// import nativgation from "./rootNavigation";
import { useEffect } from "react";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotications();
    if (notificationListener) {
      addNotificationReceivedListener(notificationListener);
    }
  }, []);
  const registerForPushNotications = async () => {
    try {
      // create channel
      const c = await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
      console.log("c", c);
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushToken.register(token.data);
      console.log("token", token.data);
    } catch (e) {
      console.log("error", e);
    }
  };
};
