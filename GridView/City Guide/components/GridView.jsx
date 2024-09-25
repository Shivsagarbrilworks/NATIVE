import React, { useState} from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Button,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Card from "../components/Card"


const GridView = ({ cities }) => {
    const [viewMore, setViewMore] = useState(4);
  
    const handleViewMore = () => {
      setViewMore((prev) => prev + 4);
    };
  
    return (
      <ScrollView>
        <View style={styles.grid}>
          {cities.slice(0, viewMore).map((city) => (
            <Card key={city.id} data={city} />
          ))}
        </View>
        {viewMore < cities.length && (
          <Button title="View More" onPress={handleViewMore} />
        )}
      </ScrollView>
    );
  };
export default GridView


const styles = StyleSheet.create({
    grid: {
      paddingHorizontal: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 20,
    paddingVertical:20,
      justifyContent: "space-between",
    },
   
  });
  