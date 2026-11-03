import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { useThemeColors } from '../hooks/useThemeColors';

export default function TentangScreen({ navigation }) {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Tentang" onBack={() => navigation.goBack()} />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.app, { color: colors.primary }]}>KatalogKu</Text>
        <Text style={[styles.label, { color: colors.muted }]}>Nama</Text>
        <Text style={[styles.value, { color: colors.text }]}>Reza Nashwan Faizi</Text>
        <Text style={[styles.label, { color: colors.muted }]}>NIM</Text>
        <Text style={[styles.value, { color: colors.text }]}>18224008</Text>
        <Text style={[styles.label, { color: colors.muted }]}>Mata kuliah</Text>
        <Text style={[styles.value, { color: colors.text }]}>II3140 – PAWM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { margin: 16, padding: 16, borderRadius: 12, borderWidth: 1 },
  app: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  label: { fontSize: 12, marginTop: 12, textTransform: 'uppercase' },
  value: { fontSize: 16, fontWeight: '600', marginTop: 2 },
});
