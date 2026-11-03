import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

// Banner promo: gambar + teks di atasnya (position: absolute)
export default function PromoBanner({ title, subtitle, image }) {
  const { colors } = useThemeColors();
  const { width } = useWindowDimensions();
  const height = Math.min(width * 0.4, 200); // landscape/tablet tidak terlalu tinggi

  return (
    <View style={[styles.banner, { height, backgroundColor: colors.imageBg }]}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={[styles.overlay, { backgroundColor: colors.overlay }]}>
        <Text style={[styles.title, { color: colors.onOverlay }]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.sub, { color: colors.onOverlay }]}>{subtitle}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { margin: 6, borderRadius: 16, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
    justifyContent: 'center', paddingHorizontal: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold' },
  sub: { fontSize: 14, marginTop: 4 },
});
