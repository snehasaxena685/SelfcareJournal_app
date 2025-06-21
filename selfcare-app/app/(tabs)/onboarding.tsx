import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name || !mood) {
      Alert.alert('Please fill all fields.');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.7:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mood }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert(data.message);
        router.push({ pathname: '/explore', params: { userId: data.userId } });
      } else {
        Alert.alert('Error: ' + data.error);
      }
    } catch (err) {
      Alert.alert('Network error.');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Get to Know You 💖</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="How are you feeling?"
        value={mood}
        onChangeText={setMood}
      />
      <Button title="Continue" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10,
    borderRadius: 5, marginBottom: 15,
  },
});