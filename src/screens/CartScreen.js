import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../components/HeaderBar';
import { useThemeColors } from '../hooks/useThemeColors';

export default function CartScreen() {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Keranjang" />
      <View style={styles.empty}>
        <Ionicons name="cart-outline" size={56} color={colors.muted} />
        <Text style={[styles.text, { color: colors.muted }]}>Keranjang masih kosong</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  text: { fontSize: 15 },
});
