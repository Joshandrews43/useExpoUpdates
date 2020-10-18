import { AppState } from "react-native";
import * as Updates from "expo-updates";

const DEFAULT_TIMEOUT = 4000;

const checkForUpdates = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await new Promise((resolve) =>
        Alert.alert(
          "There is a required update. ",
          "Your app will briefly restart.",
          [{ text: "OK", onPress: () => resolve(true) }],
          { cancelable: false }
        )
      );
      await Updates.reloadAsync();
    }
  } catch (e) {
    alert("Error Updating App");
    console.log("error updating app", e);
  }
};

const useExpoUpdates = (options) => {
  const { timeout } = options;
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      AppState.addEventListener("change", handleAppStateChange);
      setTimeout(checkForUpdates, timeout || DEFAULT_TIMEOUT);
    }
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      setTimeout(checkForUpdates, timeout || DEFAULT_TIMEOUT);
    }
  };
};

export default useExpoUpdates;
