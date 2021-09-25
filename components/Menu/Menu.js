import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View, TouchableOpacity } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import items from "./items";

const Menu = () => {
  return (
    <>
      <View style={styles.menuItems}>
        {items.map(({ id, title, subTitle, icon }) => {
          return (
            <TouchableOpacity key={id}>
              <View style={styles.menuRow}>
                <FontAwesomeIcon style={styles.icon} icon={icon} size={24} />
                <View style={styles.menuTextBox}>
                  <Text style={styles.menuText}>{title}</Text>
                  {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                </View>
                <FontAwesomeIcon
                  style={styles.arrowIcon}
                  icon={faChevronRight}
                  size={24}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default Menu;
