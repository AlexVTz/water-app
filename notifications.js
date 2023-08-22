import * as Notifications from "expo-notifications";

export const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};

export const scheduleNotificationAsync = async () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Time's up!",
      body: "Change sides!",
    },
    trigger: {
      seconds: 3,
    },
  });
};

export function LocalNotificaitonExample() {
  const [expoToken, setExpoToken] = useState < string > "No token";

  const requestExpoPushTokenAsync = useCallback(async () => {
    try {
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      setExpoToken(token || "No token");
    } catch (error) {
      console.log(error);
    }
  }, []);
}
