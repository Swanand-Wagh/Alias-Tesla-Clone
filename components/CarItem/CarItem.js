import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

const CarItem = () => {
  return (
    <>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hey Hey</Text>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
          </TouchableOpacity>
        </View>

        {/* Mileage */}
        <View style={styles.batterySection}>
          <Image
            source={require("../../assets/battery.png")}
            style={styles.batteryImg}
          />
          <Text style={styles.batteryText}>150 mi</Text>
        </View>

        {/* Status */}
        <View style={styles.status}>
          <Text style={styles.statusText}>Parked </Text>
        </View>
      </View>
    </>
  );
};

export default CarItem;
