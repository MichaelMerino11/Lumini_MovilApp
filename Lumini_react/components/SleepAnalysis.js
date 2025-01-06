import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const SleepAnalysis = () => {
  const data = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [{ data: [6, 7, 5.5, 8, 6.5, 7.5, 6], strokeWidth: 2 }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análisis del Sueño</Text>
      <LineChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  chart: { marginVertical: 8, borderRadius: 10 },
});

export default SleepAnalysis;
