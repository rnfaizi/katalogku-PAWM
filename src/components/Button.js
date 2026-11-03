import { Pressable, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

// variant: 'primary' (latar biru), 'outline' (garis tepi), 'danger' (latar merah)
export default function Button({
  title, onPress, variant = 'primary', disabled = false,
}) {
  const { colors } = useThemeColors();
  const outline = variant === 'outline';
  const fill = variant === 'danger' ? colors.danger : colors.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        outline
          ? [styles.outline, { borderColor: colors.primary }]
          : { backgroundColor: fill },
        (pressed || disabled) && styles.dim,
      ]}>
      <Text style={[styles.text, { color: outline ? colors.primary : colors.onPrimary }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { paddingVertical: 14, paddingHorizontal: 20,
    borderRadius: 10, alignItems: 'center' },
  outline: { borderWidth: 1.5 },
  dim: { opacity: 0.5 },
  text: { fontSize: 16, fontWeight: 'bold' },
});
