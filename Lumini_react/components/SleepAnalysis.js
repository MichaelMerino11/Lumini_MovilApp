import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";

const SleepAnalysis = () => {
  const sleepData = [6, 7, 5.5, 8, 7.5, 6.5, 7];
  const sleepLabels = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const barData = {
    labels: ["Ligero", "Profundo", "REM"],
    datasets: [{ data: [4, 3, 2] }],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Horas de sueño esta semana</Text>
      <LineChart
        data={{
          labels: sleepLabels,
          datasets: [{ data: sleepData }],
        }}
        width={350}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.subtitle}>Promedio por tipo de sueño</Text>
      <BarChart
        data={barData}
        width={350}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
      <Text style={styles.details}>
        Esta semana tu promedio de sueño fue de {(
          sleepData.reduce((a, b) => a + b) / sleepData.length
        ).toFixed(1)} horas por noche. ¡Sigue manteniendo un buen descanso!
      </Text>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#f0f8ff",
  backgroundGradientTo: "#a7c7e7",
  color: (opacity = 1) => `rgba(34, 73, 138, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(34, 73, 138, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
    marginVertical: 10,
  },
  details: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});

export default SleepAnalysis;
