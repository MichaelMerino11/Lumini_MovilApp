import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const descriptions = {
  Alegre: "Te sientes alegre, eso significa que tu día ha sido positivo y lleno de felicidad.",
  Avergonzado: "Te sientes avergonzado, tal vez ocurrió algo inesperado, pero esto también pasa.",
  Deprimido: "Te sientes deprimido, recuerda que siempre puedes buscar apoyo en alguien de confianza.",
  Divertido: "Te sientes divertido, tu día está lleno de risas y buenos momentos.",
  Enamorado: "Te sientes enamorado, el amor trae calidez y alegría a la vida.",
  Encantado: "Te sientes encantado, algo especial ha captado toda tu atención.",
  Enojado: "Te sientes enojado, respira profundo y toma un momento para calmarte.",
  Hambriento: "Te sientes hambriento, tal vez sea hora de disfrutar de una buena comida.",
  Indecente: "Te sientes indecente, evalúa tus pensamientos y mantén la calma.",
  Maravillado: "Te sientes maravillado, algo impresionante ha llamado tu atención.",
  Normal: "Te sientes normal, tranquilo y en equilibrio.",
  Pensativo: "Te sientes pensativo, reflexiona y deja fluir tus ideas.",
  Sorprendido: "Te sientes sorprendido, algo inesperado ha cambiado tu día.",
  Tranquilo: "Te sientes tranquilo, disfrutas de un momento de paz y serenidad.",
  Triste: "Te sientes triste, recuerda que cada día es una oportunidad para mejorar.",
};

const emotionColors = {
  Alegre: "#FFEB3B",
  Avergonzado: "#FF7043",
  Deprimido: "#90CAF9",
  Divertido: "#FF9800",
  Enamorado: "#F06292",
  Encantado: "#9575CD",
  Enojado: "#F44336",
  Hambriento: "#FFC107",
  Indecente: "#BDBDBD",
  Maravillado: "#00BCD4",
  Normal: "#8BC34A",
  Pensativo: "#4CAF50",
  Sorprendido: "#FFC400",
  Tranquilo: "#009688",
  Triste: "#2196F3",
};

const EmotionDetail = ({ route, navigation }) => {
  const { emotion } = route.params;
  const backgroundColor = emotionColors[emotion.name] || "#FFFFFF";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={emotion.image} style={styles.image} />
      <Text style={styles.title}>{emotion.name}</Text>
      <Text style={styles.description}>{descriptions[emotion.name]}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("MainMenu")}>
          <Image source={require("../assets/home.png")} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EmotionTracker")}>
          <Image source={require("../assets/emociones.png")} style={styles.button} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default EmotionDetail;
