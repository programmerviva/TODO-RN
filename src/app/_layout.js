import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" backgroundColor="white" translucent={false} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="addtodo" />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
