// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function ReflectScreen() {
//   const [reflection, setReflection] = useState('');
//   const [userId, setUserId] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     AsyncStorage.getItem('userId').then(id => {
//       if (id) setUserId(id);
//     });
//   }, []);

//   const handleSubmit = async () => {
//     if (!reflection.trim()) {
//       Alert.alert('Please write something before submitting.');
//       return;
//     }

//     try {
//       const response = await fetch('http://192.168.1.7:5000/api/reflections', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ reflection, userId }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         Alert.alert(data.message || 'Reflection saved!');
//         setReflection('');
//         router.push('/explore');
//       } else {
//         Alert.alert('Error saving reflection');
//       }
//     } catch (err) {
//       console.error('Submit error:', err);
//       Alert.alert('Network error. Please check your Wi-Fi and try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reflection 🪞</Text>
//       <TextInput
//         style={styles.textArea}
//         placeholder="Write your thoughts here..."
//         value={reflection}
//         onChangeText={setReflection}
//         multiline
//         numberOfLines={5}
//       />
//       <Button title="Submit Reflection" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
//   textArea: {
//     borderWidth: 1, borderColor: '#ccc', padding: 15,
//     borderRadius: 8, textAlignVertical: 'top', marginBottom: 20,
//   },
// });
