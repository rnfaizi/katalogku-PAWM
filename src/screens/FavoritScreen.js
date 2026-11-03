import { View, FlatList, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Card from '../components/Card';
import { useFavorit } from '../context/FavoritContext';
import { useThemeColors } from '../hooks/useThemeColors';

export default function FavoritScreen({ navigation }) {
  const { favorit } = useFavorit(); // ambil data dari Context
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Favorit" subtitle={`${favorit.length} produk`} />
      <FlatList
        data={favorit}
        numColumns={2}
        style={styles.grid}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.muted }]}>Belum ada produk favorit</Text>}
        renderItem={({ item }) => (
          <View style={{ width: '50%' }}>
            <Card title={item.title} price={item.price}
              image={item.thumbnail} rating={item.rating}
              onPress={() => navigation.navigate('Detail', { id: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  grid: { flex: 1 },
  list: { padding: 10 },
  empty: { textAlign: 'center', marginTop: 40 },
});
