import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritProvider } from './src/context/FavoritContext';
import { useThemeColors } from './src/hooks/useThemeColors';

export default function App() {
  const { isDark } = useThemeColors();

  return (
    <SafeAreaProvider>
      <FavoritProvider>
        <AppNavigator />
        {/* Teks status bar kontras dengan warna header (navy / biru muda saat gelap) */}
        <StatusBar style={isDark ? 'dark' : 'light'} />
      </FavoritProvider>
    </SafeAreaProvider>
  );
}
