import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { data } from "@/constants/sampleDataList";
import TaskContainer from "@/components/TaskContainer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>Task List</Text>
      </View>

      <TaskContainer tasks={data}></TaskContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
