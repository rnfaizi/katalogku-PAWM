import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors } from '../hooks/useThemeColors';

export default function HeaderBar({ title, subtitle, onBack }) {
  const insets = useSafeAreaInsets(); // jarak aman dari notch
  const { colors } = useThemeColors();

  return (
    <View
      style={[styles.bar, { paddingTop: insets.top + 12, backgroundColor: colors.primary }]}>
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
      <View>
        <Text style={[styles.title, { color: colors.onPrimary }]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.sub, { color: colors.headerSub }]}>{subtitle}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingBottom: 14 },
  back: { marginRight: 12 },
  title: { fontSize: 20, fontWeight: 'bold' },
  sub: { fontSize: 13, marginTop: 2 },
});
