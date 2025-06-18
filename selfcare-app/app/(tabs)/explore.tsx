import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ExploreScreen() {
  const { userId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Today's Quest</Text>
      <Text style={styles.quest}>Spend 10 minutes quietly under the sky.</Text>

      <Button
        title="I Did It!"
        onPress={() => router.push({ pathname: '/reflect', params: { userId } })}
      />

      <View style={{ height: 20 }} />

      <Button
        title="View My Journal"
        onPress={() => router.push({ pathname: '/journal', params: { userId } })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 30, backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center',
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  quest: { fontSize: 18, textAlign: 'center', marginBottom: 30, color: '#444' },
});
