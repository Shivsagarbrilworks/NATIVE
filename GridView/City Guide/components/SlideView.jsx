import React from "react";
import {
  StyleSheet,
    Dimensions,
  FlatList,

} from "react-native";
import SlideCard from "../components/SlideCard"

const { width} = Dimensions.get("window");


const SlideView = ({ cities }) => {
    const CARD_GAP = 20;
  const CARD_WIDTH = width - CARD_GAP * 2; 
  
    return (
      <FlatList
      horizontal
      pagingEnabled
      data={cities}
      renderItem={({ item }) => <SlideCard data={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.slideContainer}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
    );
  };
  
export default SlideView  



const styles = StyleSheet.create({
 
    slideContainer: {
       gap:10,
      paddingHorizontal: width*0.05 ,
      justifyContent:"center"
    }
 
  });
  