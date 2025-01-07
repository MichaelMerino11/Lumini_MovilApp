import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

const sounds = [
  {
    title: "Lluvia Suave",
    image: require("../assets/rain.jpg"),
    file: require("../assets/sounds/rain.mp3"),
  },
  {
    title: "Olas del Mar",
    image: require("../assets/sea.jpg"),
    file: require("../assets/sounds/sea.mp3"),
  },
  {
    title: "Bosque Sereno", 
    image: require("../assets/forrest.jpg"),
    file: require("../assets/sounds/forest.mp3"),
  },
  {
    title: "Viento Tranquilo",
    image: require("../assets/wind.jpg"),
    file: require("../assets/sounds/wind.mp3"),
  },
];

const RelaxingSounds = () => {
  const [sound, setSound] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const playSound = async (item, index) => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
      setPlayingIndex(null);
    }
    const { sound: newSound } = await Audio.Sound.createAsync(item.file);
    setSound(newSound);
    setPlayingIndex(index);
    await newSound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setPlayingIndex(null);
    }
  };

  const togglePlayPause = (item, index) => {
    if (playingIndex === index) {
      stopSound();
    } else {
      playSound(item, index);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => togglePlayPause(item, index)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {playingIndex === index ? "Pausar" : "Reproducir"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sonidos Relajantes</Text>
      <FlatList
        data={sounds}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f8ff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RelaxingSounds;
