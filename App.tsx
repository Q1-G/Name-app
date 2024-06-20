/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [vowelsCount, setVowelsCount] = useState(0);
  const [consonantsCount, setConsonantsCount] = useState(0);
  const [nameLength, setNameLength] = useState(0);

  const countVowels = (name: string) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of name) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const countConsonants = (name: string) => {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
    for (let char of name) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const getNameLength = (name: string) => {
    return name.length;
  };

  const calculateCounts = (name: string) => {
    const vowelsCount = countVowels(name);
    const consonantsCount = countConsonants(name);
    const nameLength = getNameLength(name);

    setVowelsCount(vowelsCount);
    setConsonantsCount(consonantsCount);
    setNameLength(nameLength);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Calculate" onPress={() => calculateCounts(name)} />
      <View style={{ marginTop: 20 }}>
        <Text>Number of vowels: {vowelsCount}</Text>
        <Text>Number of consonants: {consonantsCount}</Text>
        <Text>Length of the name: {nameLength}</Text>
      </View>
    </View>
  );
};

export default App;
