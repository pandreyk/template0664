import AsyncStorage from '@react-native-async-storage/async-storage'

export const getUser = async () => {
  return await AsyncStorage.getItem('user')
}

export const setUser = async (jwt: string) => {
  await AsyncStorage.setItem('user', jwt)
}

export const removeUser = async () => {
  await AsyncStorage.removeItem('user')
}
