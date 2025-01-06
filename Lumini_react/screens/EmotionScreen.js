import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import axios from '../services/api';

const emotions = ['Feliz', 'Triste', 'Ansioso', 'Calmado', 'Enojado'];

export default function EmotionScreen({ navigation }) {
  const [selectedEmotion, setSelectedEmotion] = useState('');

  const submitEmotion = async () => {
    try {
      await axios.post('/emotions', { emotion: selectedEmotion });
      Alert.alert('Éxito', 'Emoción registrada exitosamente');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'No se pudo registrar la emoción');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cómo te sientes hoy?</Text>
      <View style={styles.emotionsContainer}>
        {emotions.map((emotion) => (
          <TouchableOpacity
            key={emotion}
            style={[
              styles.emotionButton,
              selectedEmotion === emotion && styles.selected,
            ]}
            onPress={() => setSelectedEmotion(emotion)}
          >
            <Text style={styles.emotionText}>{emotion}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Registrar Emoción"
        onPress={submitEmotion}
        disabled={!selectedEmotion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  emotionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emotionButton: {
    padding: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  selected: {
    backgroundColor: '#6200ee',
  },
  emotionText: {
    color: '#000',
  },
});
