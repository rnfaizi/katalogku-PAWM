import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors } from '../hooks/useThemeColors';

// value: angka 0–5, mendukung setengah bintang (mis. 4.5)
export default function Rating({ value = 0, size = 14, showValue = true }) {
  const { colors } = useThemeColors();
  const rating = Math.max(0, Math.min(5, Number(value) || 0));
  const stars = [1, 2, 3, 4, 5].map((i) => {
    if (rating >= i) return 'star';
    if (rating >= i - 0.5) return 'star-half';
    return 'star-outline';
  });

  return (
    <View style={styles.row} accessibilityLabel={`Rating ${rating.toFixed(1)} dari 5`}>
      {stars.map((name, i) => (
        <Ionicons key={i} name={name} size={size} color={colors.star} />
      ))}
      {showValue ? (
        <Text style={[styles.value, { color: colors.muted, fontSize: size - 2 }]}>
          {rating.toFixed(1)}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 1 },
  value: { marginLeft: 4 },
});
