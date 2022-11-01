import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import BodyText from "../components/BodyText";
import HeadingText from "../components/HeadingText";
import Wrapper from "../components/Wrapper";
import { colors } from "../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import AddressBox from "../components/AddressBox";
import * as Location from "expo-location";

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const handleReferesh = async () => {
    setLocation(null);
    fetchLocation();
  };

  return (
    <Wrapper>
      {loading && (
        <View style={styles.refresh}>
          <View style={styles.refreshDiv}></View>
          <ActivityIndicator size={"large"} color={colors.white} />
        </View>
      )}
      <View style={styles.view}>
        <View style={styles.alignDiv}>
          <HeadingText>My Location</HeadingText>
          {loading ? (
            <BodyText style={styles.greenText}>Loading...</BodyText>
          ) : (
            <TouchableOpacity
              onPress={handleReferesh}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FontAwesome name="refresh" size={20} color={colors.pryGreen} />
              <BodyText style={styles.greenText}>Reload</BodyText>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.main}>
          <AddressBox
            lat={location?.coords.latitude}
            long={location?.coords.longitude}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
  },
  greenText: {
    color: colors.pryGreen,
    paddingLeft: 8,
  },
  alignDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
  },
  main: {
    height: "100%",
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  refresh: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 20,
  },
  refreshDiv: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.5,
    zIndex: 20,
  },
});
