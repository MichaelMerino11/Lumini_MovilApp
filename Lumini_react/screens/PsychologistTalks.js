import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";

const talks = [
  {
    title: "Dependencia emocional",
    image: require("../assets/dependencia.png"),
    link: "https://www.youtube.com/watch?v=zRj5M-MDzzo&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
  {
    title: "¿Por qué nos equivocamos tanto en el amor?",
    image: require("../assets/amor_fallido.png"),
    link: "https://www.youtube.com/watch?v=u4duNKPm9cM&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
  {
    title: "Salud mental",
    image: require("../assets/paz_mental.png"),
    link: "https://www.youtube.com/watch?v=Qes1RMK9a50&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
  {
    title: "El valor de la actitud",
    image: require("../assets/actitud.jpg"),
    link: "https://www.youtube.com/watch?v=Z3_f6a-YrY8&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
  {
    title: "¿Qué da sentido a la vida?",
    image: require("../assets/vida.png"),
    link: "https://www.youtube.com/watch?v=AdB4O9Ssci8&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
  {
    title: "¿Qué sucede en la mente de un procrastinador?",
    image: require("../assets/procrastinar.png"),
    link: "https://www.youtube.com/watch?v=PG6oFK0a1NA&pp=ygUeY2hhcmxhcyBkZSBwc2ljb2xvZ29zIGV4cGVydG9z",
  },
];

const PsychologistTalks = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace:", err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openLink(item.link)} style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Charlas de Psicólogos Expertos</Text>
      <FlatList
        data={talks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
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
  list: {
    justifyContent: "center",
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});

export default PsychologistTalks;
