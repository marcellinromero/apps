import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  const currentStyles = theme === 'Escuro' || isNightMode ? styles.dark : styles.light;

  return (
    <View style={[styles.container, currentStyles]}>
      <Text style={[styles.title, { fontSize }]}>Configurações de Preferências</Text>

      <Text style={[styles.label, { fontSize }]}>Tema:</Text>
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, { fontSize }]}>Tamanho da Fonte:</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />
      <Text style={[styles.fontSizeText, { fontSize }]}>Tamanho atual: {fontSize}</Text>

      <Text style={[styles.label, { fontSize }]}>Modo Noturno:</Text>
      <Switch
        value={isNightMode}
        onValueChange={(value) => setIsNightMode(value)}
      />
      <Text style={[{ fontSize }]}>{isNightMode ? 'Ligado' : 'Desligado'}</Text>

      <Button title="Reset " onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  fontSizeText: {
    fontSize: 16,
    marginVertical: 10,
  },
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default App;