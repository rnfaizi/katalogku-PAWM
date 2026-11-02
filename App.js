import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeColors } from './src/hooks/useThemeColors';

export default function App() {
  const { colors, isDark } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>KatalogKu</Text>
      <Text style={[styles.sub, { color: colors.muted }]}>Setup berhasil!</Text>
      <Text style={[styles.sub, { color: colors.muted }]}>
        Mode {isDark ? 'gelap' : 'terang'}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold' },
  sub: { marginTop: 8 },
});
