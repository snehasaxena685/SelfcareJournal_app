
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStoredUserId() {
  return await AsyncStorage.getItem('userId');
}

export async function saveUserId(id: string) {
  await AsyncStorage.setItem('userId', id);
}
