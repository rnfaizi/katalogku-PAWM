import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
// import DetailScreen from './src/screens/DetailScreen';
import { useThemeColors } from './src/hooks/useThemeColors';

// App.js sementara (diganti navigator di Modul 5)
export default function App() {
  const { isDark } = useThemeColors();

  return (
    <SafeAreaProvider>
      <HomeScreen />
      {/* ganti dengan <DetailScreen /> untuk melihat detail */}
      <StatusBar style={isDark ? 'dark' : 'light'} />
    </SafeAreaProvider>
  );
}
