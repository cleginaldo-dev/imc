import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handlesubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert('Você está abaixo do peso! ' + imc.toFixed(1))
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(1))
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Levemente acima do peso! ' + imc.toFixed(1))
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}
        onPress={handlesubmit}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 35,
    color: 'black'
  },
  input: {
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: 'white',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginHorizontal: 80,
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 25
  }
});
