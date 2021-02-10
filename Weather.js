import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import List from "./List";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#BA8B02", "#181818"],
    title: "It's Thundering out there..",
    subtitle:
      "You hear the AC/DC?...dont be Thunderstruck, Be careful out there!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#2C3E50", "#4CA1AF"],
    title: "Drizzle",
    subtitle: "Snoop Dogg requests that you bring your UmBrizzle (Umbrella)",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Its Raining, its Pouring...",
    subtitle: "Bring an umbrella...maybe wear your boots also",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C5BDD9", "#CACBD2"],
    title: "Its Snowing!!!",
    subtitle: "Got ya boots, got ya winter coat and gloves?.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2F80ED", "#56CCF2"],
    title: "Sunny outside",
    subtitle: "Grab a cocktail and lets suntan...Wear your sunscreen",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Just a little dull outside, nothing special",
  },
};

export default function Weather({ temp, condition }) {
  // const [isSelected, setSelection] = useState(false);

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
        <List />
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
    flex: 1,
  },
  halfContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 0,
    // marginBottom: 30,
    justifyContent: "center",
    flex: 1,
  },
});
