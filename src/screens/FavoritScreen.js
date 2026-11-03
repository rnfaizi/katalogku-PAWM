import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { useThemeColors } from '../hooks/useThemeColors';

export default function FavoritScreen() {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Favorit" />
      <Text style={[styles.text, { color: colors.muted }]}>Segera hadir di Modul 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { padding: 16 },
});
