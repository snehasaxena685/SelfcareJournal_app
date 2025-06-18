import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function JournalScreen() {
  const { userId } = useLocalSearchParams();
  const [reflections, setReflections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReflections = async () => {
    try {
      if (!userId) {
        Alert.alert('Missing user ID ❌');
        console.error('No userId found in route params');
        setLoading(false);
        return;
      }

      const response = await fetch(`http://192.168.1.2:5000/api/reflections/${userId}`);
      const contentType = response.headers.get('Content-Type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setReflections(data);
      } else {
        const errorText = await response.text();
        console.error('Unexpected server response:', errorText);
        Alert.alert('Server returned unexpected content ❌');
      }
    } catch (err) {
      Alert.alert('Network error while loading reflections');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReflections();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    if (!item || !item.reflection) return null;

    return (
      <View style={styles.card}>
        <Text style={styles.date}>
          {item.createdAt ? new Date(item.createdAt).toLocaleString() : 'No date'}
        </Text>
        <Text style={styles.text}>{item.reflection}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Your Reflections</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#888" />
      ) : reflections.length === 0 ? (
        <Text style={styles.empty}>No reflections found. Try submitting one!</Text>
      ) : (
        <FlatList
          data={reflections}
          keyExtractor={(item, index) => item._id || index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  card: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
    padding: 15, marginBottom: 15, backgroundColor: '#f9f9f9',
  },
  date: { fontSize: 12, color: '#888', marginBottom: 8 },
  text: { fontSize: 16 },
  empty: { textAlign: 'center', color: '#666', marginTop: 20 },
});
