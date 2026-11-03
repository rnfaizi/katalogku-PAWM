import { useState } from 'react';
import { View, FlatList, Text, StyleSheet,
  useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomInput from '../components/CustomInput';
import CategoryChips from '../components/CategoryChips';
import PromoBanner from '../components/PromoBanner';
import Card from '../components/Card';
import { DUMMY_PRODUCTS } from '../data/dummy';
import { useThemeColors } from '../hooks/useThemeColors';

const URUTAN = ['Termurah', 'Termahal'];

export default function HomeScreen() {
  const { width } = useWindowDimensions(); // lebar layar (dp)
  const insets = useSafeAreaInsets();      // notch kiri/kanan saat landscape
  const { colors } = useThemeColors();
  const numColumns = width >= 768 ? 4 : width >= 500 ? 3 : 2;
  const [query, setQuery] = useState('');
  const [kategori, setKategori] = useState('Semua');
  const [urutan, setUrutan] = useState(null); // null = urutan asli

  const products = DUMMY_PRODUCTS; // Modul 7: diganti data API
  const categories = ['Semua',
    ...new Set(products.map((p) => p.category))];
  const filtered = products.filter((p) =>
    (kategori === 'Semua' || p.category === kategori) &&
    p.title.toLowerCase().includes(query.toLowerCase()));
  // sort() mengubah array asli, jadi salin dulu dengan [...]
  const data = urutan
    ? [...filtered].sort((a, b) =>
      urutan === 'Termurah' ? a.price - b.price : b.price - a.price)
    : filtered;

  // Ketuk chip urutan yang sama lagi untuk kembali ke urutan asli
  const pilihUrutan = (item) => setUrutan((u) => (u === item ? null : item));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="KatalogKu" subtitle="Temukan produk favoritmu" />
      <View style={[styles.body, { paddingLeft: insets.left, paddingRight: insets.right }]}>
        <View style={styles.search}>
          <CustomInput icon="search" placeholder="Cari produk..." value={query}
            onChangeText={setQuery} />
        </View>
        <CategoryChips items={categories} selected={kategori}
          onSelect={setKategori} />
        <CategoryChips items={URUTAN} selected={urutan}
          onSelect={pilihUrutan} />
        <FlatList
          key={numColumns}  // wajib: paksa render ulang saat kolom berubah
          data={data}
          numColumns={numColumns}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={[styles.list, { paddingBottom: 24 + insets.bottom }]}
          ListHeaderComponent={
            <PromoBanner title="Diskon 50%" subtitle="Khusus produk pilihan minggu ini"
              image="https://picsum.photos/id/1060/800/400" />}
          ListEmptyComponent={
            <Text style={[styles.empty, { color: colors.muted }]}>Produk tidak ditemukan</Text>}
          renderItem={({ item }) => (
            <View style={{ width: `${100 / numColumns}%` }}>
              <Card title={item.title} price={item.price}
                image={item.thumbnail} rating={item.rating} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
  search: { paddingHorizontal: 16, paddingTop: 12 },
  list: { paddingHorizontal: 10 },
  empty: { textAlign: 'center', marginTop: 40 },
});
