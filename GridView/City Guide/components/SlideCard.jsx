import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
const { width, height } = Dimensions.get("window");

const SlideCard = ({ data }) => {
  return (
    <View style={styles.slideCard}>
      <ImageBackground
        source={{ uri: data.image }}
        resizeMode="cover"
        style={styles.imageBackgroundSlide}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <Text style={styles.cityName}>{data.name}</Text>
          <Text style={styles.cityDesc}>{data.description}</Text>
          <View>
            <FontAwesome name="long-arrow-right" size={30} color="white" />
          </View>
        </View>
        <View style={{ ...styles.topIcon, right: 20 }}>
          <AntDesign name="hearto" size={30} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SlideCard;

const styles = StyleSheet.create({
  slideCard: {
    width: width - 30,
    height: height - height * 0.1,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBackgroundSlide: {
    position: "relative",
    width: "98%",
    height: height - height * 0.1,
    justifyContent: "flex-end",
  },

  slideContainer: {
    gap: 10,
    paddingHorizontal: width * 0.05,
    justifyContent: "center",
  },

  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  topIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  cityDesc: {
    fontSize: 16,
    color: "#fff",
  },
});
