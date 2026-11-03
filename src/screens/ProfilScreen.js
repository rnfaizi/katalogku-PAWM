import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import { useThemeColors } from '../hooks/useThemeColors';

export default function ProfilScreen({ navigation }) {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Profil" />
      <View style={styles.content}>
        <Text style={[styles.text, { color: colors.muted }]}>Form profil segera hadir di Modul 6</Text>
        {/* Tentang ada di Stack, jadi terbuka di atas tab bar */}
        <Button title="Tentang Aplikasi" variant="outline"
          onPress={() => navigation.navigate('Tentang')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, gap: 16 },
  text: { fontSize: 15 },
});
