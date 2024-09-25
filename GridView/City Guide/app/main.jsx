import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,

} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import data  from "../temp/cities.json"
import GridView from "../components/GridView"
import SlideView from "../components/SlideView"

const cities= data.cities;

export default function Main() {
  const [activeView, setActiveView] = useState("SLIDE");
  const _renderView = useMemo(() => {
    switch (activeView) {
      case "GUID":
        return <GridView cities={cities} />;
      case "SLIDE":
        return <SlideView cities={cities} />;
      default:
        return <GridView cities={cities} />;
    }
  }, [activeView]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>City Guide</Text>
        <View style={styles.iconContainer}>
          <AntDesign
            name="appstore1"
            onPress={() => setActiveView("GUID")}
            size={24}
            color={activeView === "GUID" ? "black" : "#adadad"}
          />
          <MaterialCommunityIcons
            name="cards"
            onPress={() => setActiveView("SLIDE")}
            size={27}
            color={activeView === "SLIDE" ? "black" : "#adadad"}
          />
        </View>
      </View>
      <View style={styles.main}>{_renderView}</View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
   
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
