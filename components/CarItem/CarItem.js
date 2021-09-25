import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import Menu from "../Menu/Menu";

const CarItem = () => {
  const [isLocked, setIsLocked] = useState(true);

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
          <Text style={styles.headerTitle}>BatMobile</Text>
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

        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLocked(!isLocked)}>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={isLocked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Menu />
      </View>
    </>
  );
};

export default CarItem;
