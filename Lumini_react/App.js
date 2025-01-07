import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./components/MainMenu";
import EmotionTracker from "./components/EmotionTracker";
import SleepAnalysis from "./components/SleepAnalysis";
import EmotionDetail from "./screens/EmotionDetail";
import PsychologistTalks from "./screens/PsychologistTalks";
import RelaxingSounds from "./screens/RelaxingSounds";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ title: "Menú Principal" }}
        />
        <Stack.Screen
          name="EmotionTracker"
          component={EmotionTracker}
          options={{ title: "Registro de Emociones" }}
        />
        <Stack.Screen name="EmotionDetail" component={EmotionDetail} />
        <Stack.Screen
          name="SleepAnalysis"
          component={SleepAnalysis}
          options={{ title: "Análisis del Sueño" }}
        />
        <Stack.Screen name="PsychologistTalks" component={PsychologistTalks} />
        <Stack.Screen name="RelaxingSounds" component={RelaxingSounds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
