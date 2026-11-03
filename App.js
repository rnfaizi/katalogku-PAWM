import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useThemeColors } from './src/hooks/useThemeColors';

export default function App() {
  const { isDark } = useThemeColors();

  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar style={isDark ? 'dark' : 'light'} />
    </SafeAreaProvider>
  );
}
