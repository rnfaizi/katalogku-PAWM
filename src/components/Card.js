import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import Rating from './Rating';

// discount: angka persen (mis. 10 → "-10%"), rating: angka 0–5
export default function Card({ title, price, image, discount, rating, onPress }) {
  const { colors } = useThemeColors();

  return (
    <Pressable
      style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}
      onPress={onPress}
      accessibilityRole="button">
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { backgroundColor: colors.imageBg }]}
        />
        {discount ? (
          <View style={[styles.badge, { backgroundColor: colors.danger }]}>
            <Text style={[styles.badgeText, { color: colors.onPrimary }]}>
              -{Math.round(discount)}%
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.body}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {title}
        </Text>
        {rating != null ? <Rating value={rating} /> : null}
        <Text style={[styles.price, { color: colors.accent }]}>$ {price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, margin: 6,
    borderRadius: 12, overflow: 'hidden',
    elevation: 2,                              // bayangan Android
    shadowOpacity: 0.1,                        // bayangan iOS
    shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  image: { width: '100%', aspectRatio: 1 },
  badge: {
    position: 'absolute', top: 8, left: 8,
    paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6,
  },
  badgeText: { fontSize: 12, fontWeight: 'bold' },
  body: { padding: 10 },
  title: { fontSize: 14, minHeight: 36 },
  price: { marginTop: 4, fontWeight: 'bold' },
});
