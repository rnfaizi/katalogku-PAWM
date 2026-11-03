import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors } from '../hooks/useThemeColors';

// icon: nama ikon Ionicons di kiri input (mis. "search")
export default function CustomInput({ label, error, icon, ...rest }) {
  const { colors } = useThemeColors();

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={[styles.label, { color: colors.text }]}>{label}</Text> : null}
      <View
        style={[
          styles.field,
          { backgroundColor: colors.card, borderColor: error ? colors.danger : colors.border },
        ]}>
        {icon ? (
          <Ionicons name={icon} size={20} color={colors.muted} style={styles.icon} />
        ) : null}
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholderTextColor={colors.muted}
          {...rest}
        />
      </View>
      {error ? <Text style={[styles.error, { color: colors.danger }]}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { marginBottom: 6, fontWeight: '600' },
  field: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderRadius: 10, paddingHorizontal: 12,
  },
  icon: { marginRight: 8 },
  input: { flex: 1, paddingVertical: 10, fontSize: 15 },
  error: { marginTop: 4, fontSize: 12 },
});
