import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

export default function CategoryChips({ items, selected, onSelect }) {
  const { colors } = useThemeColors();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      style={styles.scroll} contentContainerStyle={styles.row}>
      {items.map((item) => {
        const aktif = item === selected;
        return (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            accessibilityRole="button"
            accessibilityState={{ selected: aktif }}
            style={[
              styles.chip,
              aktif
                ? { backgroundColor: colors.primary, borderColor: colors.primary }
                : { backgroundColor: colors.card, borderColor: colors.border },
            ]}>
            <Text
              style={[
                styles.text,
                aktif ? [styles.textAktif, { color: colors.onPrimary }] : { color: colors.text },
              ]}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 0 },  // jangan ambil sisa tinggi layar
  row: { paddingHorizontal: 16, paddingBottom: 8, gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: 20, borderWidth: 1 },
  text: { textTransform: 'capitalize' },
  textAktif: { fontWeight: 'bold' },
});
