import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },
  header: {
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImg: {
    height: 26,
    width: 70,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  controls: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 155,
    marginLeft: 20,
  },
  controlsBtn: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
  },
});

export default styles;
