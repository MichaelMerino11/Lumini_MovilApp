import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const emotions = [
  { name: "Alegre", image: require("../assets/alegre.png") },
  { name: "Avergonzado", image: require("../assets/avergonzado.png") },
  { name: "Deprimido", image: require("../assets/deprimido.png") },
  { name: "Divertido", image: require("../assets/divertido.png") },
  { name: "Enamorado", image: require("../assets/enamorado.png") },
  { name: "Encantado", image: require("../assets/encantado.png") },
  { name: "Enojado", image: require("../assets/enojado.png") },
  { name: "Hambriento", image: require("../assets/hambriento.png") },
  { name: "Indecente", image: require("../assets/indecente.png") },
  { name: "Maravillado", image: require("../assets/maravillado.png") },
  { name: "Normal", image: require("../assets/normal.png") },
  { name: "Pensativo", image: require("../assets/pensativo.png") },
  { name: "Sorprendido", image: require("../assets/sorprendido.png") },
  { name: "Tranquilo", image: require("../assets/tranquilo.png") },
  { name: "Triste", image: require("../assets/triste.png") },
];

const EmotionTracker = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Cómo te sientes hoy?</Text>
      <View style={styles.grid}>
        {emotions.map((emotion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.emotionCard}
            onPress={() => navigation.navigate("EmotionDetail", { emotion })}
          >
            <Image source={emotion.image} style={styles.emotionImage} />
            <Text style={styles.emotionName}>{emotion.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  emotionCard: {
    width: 100,
    height: 120,
    margin: 10,
    alignItems: "center",
  },
  emotionImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  emotionName: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default EmotionTracker;
