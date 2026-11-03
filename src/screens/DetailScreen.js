import { ScrollView, View, Text, Image, StyleSheet,
  useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import Button from '../components/Button';
import { DUMMY_PRODUCTS } from '../data/dummy';
import { useThemeColors } from '../hooks/useThemeColors';
import { useFavorit } from '../context/FavoritContext';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params; // hanya id yang dikirim dari Beranda
  const product = DUMMY_PRODUCTS.find((p) => p.id === id); // Modul 7: ambil dari API
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { colors } = useThemeColors();
  const { isFavorit, toggleFavorit } = useFavorit();
  const fav = isFavorit(id);
  // Landscape / tablet: gambar di kiri, info di kanan agar gambar tidak terlalu besar
  const wide = width > height || width >= 768;

  if (!product) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <HeaderBar title="Detail Produk" onBack={() => navigation.goBack()} />
        <Text style={[styles.notFound, { color: colors.muted }]}>Produk tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title={product.title} onBack={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={[
          styles.content,
          wide && styles.contentWide,
          {
            paddingLeft: 16 + insets.left,
            paddingRight: 16 + insets.right,
            paddingBottom: 16 + insets.bottom,
          },
        ]}>
        <Image source={{ uri: product.thumbnail }}
          style={[styles.image, wide && styles.imageWide, { backgroundColor: colors.imageBg }]} />
        <View style={wide && styles.infoWide}>
          <Text style={[styles.category, wide && styles.categoryWide, { color: colors.muted }]}>
            {product.category}
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>{product.title}</Text>
          <Text style={[styles.price, { color: colors.accent }]}>$ {product.price}</Text>
          <Text style={[styles.rating, { color: colors.muted }]}>Rating {product.rating} / 5</Text>
          <Text style={[styles.desc, { color: colors.text }]}>{product.description}</Text>
          <Button
            title={fav ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
            variant={fav ? 'outline' : 'primary'}
            onPress={() => toggleFavorit(product)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  notFound: { textAlign: 'center', marginTop: 40 },
  content: { padding: 16 },
  contentWide: { flexDirection: 'row', gap: 24, alignItems: 'flex-start' },
  image: { width: '100%', aspectRatio: 1, borderRadius: 16 },
  imageWide: { width: '40%', maxWidth: 360 },
  infoWide: { flex: 1 },
  category: { marginTop: 16, textTransform: 'uppercase', fontSize: 12 },
  categoryWide: { marginTop: 0 },
  title: { fontSize: 22, fontWeight: 'bold' },
  price: { fontSize: 20, marginTop: 6, fontWeight: 'bold' },
  rating: { marginTop: 4 },
  desc: { fontSize: 15, lineHeight: 22, marginVertical: 16 },
});
