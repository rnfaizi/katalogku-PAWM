import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors } from '../hooks/useThemeColors';

export default function HeaderBar({ title, subtitle, onBack }) {
  const insets = useSafeAreaInsets(); // jarak aman dari notch
  const { colors } = useThemeColors();

  return (
    <View
      style={[
        styles.bar,
        {
          paddingTop: insets.top + 12,
          paddingLeft: insets.left + 16,   // notch di kiri/kanan saat landscape
          paddingRight: insets.right + 16,
          backgroundColor: colors.primary,
        },
      ]}>
      {onBack ? (
        <Pressable
          onPress={onBack}
          hitSlop={10}
          style={styles.back}
          accessibilityRole="button"
          accessibilityLabel="Kembali">
          <Ionicons name="arrow-back" size={24} color={colors.onPrimary} />
        </Pressable>
      ) : null}
      <View style={styles.texts}>
        {/* numberOfLines: judul produk yang panjang dipotong "..." */}
        <Text style={[styles.title, { color: colors.onPrimary }]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[styles.sub, { color: colors.headerSub }]}>{subtitle}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'center', paddingBottom: 14 },
  back: { marginRight: 12 },
  texts: { flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold' },
  sub: { fontSize: 13, marginTop: 2 },
});
