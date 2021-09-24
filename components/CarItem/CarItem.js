import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const CarItem = () => {
  return (
    <>
      <View style={styles.carContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text>Hey Hey</Text>
          <Text>Hey Hey</Text>
          <Text>Hey Hey</Text>
        </View>
      </View>
    </>
  );
};

export default CarItem;
