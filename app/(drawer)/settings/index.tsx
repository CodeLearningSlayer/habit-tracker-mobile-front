import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Drawer from "expo-router/drawer";
import Header from "../../../components/Header";
import { challenges } from "@/constants/data/challenges";
import Challenge from "@/components/ChallengeItem/Challenge";

export default function SettingsPage() {
  return (
    <ScrollView style={styles.mainView} contentContainerStyle={styles.container}>
      <Text style={styles.challengesTitle}>Челленджи</Text>
      <View style={styles.itemsWrapper}>
        {challenges.map((item, index) => {
          return (
            <Challenge
              img={item.img}
              name={item.name}
              sub={item.sub}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  challengesTitle: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 24,
    fontWeight: "600"
  },
  itemsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
});
