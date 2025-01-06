import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const MainMenu = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0); // Animación de opacidad

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Image
          source={require("../assets/logo_principal.png")}
          style={styles.logo}
        />
      </Animated.View>
      <Text style={styles.description}>
        Lumini es tu asistente personal para un mejor bienestar emocional y un
        descanso reparador. Registra tus emociones, analiza tu sueño y descubre
        recomendaciones personalizadas.
      </Text>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("EmotionTracker")}
        >
          <Text style={styles.menuText}>Registro de Emociones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("SleepAnalysis")}
        >
          <Text style={styles.menuText}>Análisis del Sueño</Text>
        </TouchableOpacity>
        {/* Agrega más botones según sea necesario */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#4CAF50",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginVertical: 20,
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  menu: {
    marginTop: 20,
    width: "100%",
  },
  menuButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    transform: [{ scale: 1 }],
  },
  menuButtonPress: {
    transform: [{ scale: 0.98 }],
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MainMenu;
