import { useColorScheme } from 'react-native';
import { COLORS, DARK_COLORS } from '../theme/colors';

// Mengembalikan palet warna sesuai tema HP (terang/gelap)
export function useThemeColors() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  return { colors: isDark ? DARK_COLORS : COLORS, isDark };
}
