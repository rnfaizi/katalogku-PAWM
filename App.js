import { useState } from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderBar from './src/components/HeaderBar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CustomInput from './src/components/CustomInput';
import Rating from './src/components/Rating';
import { useThemeColors } from './src/hooks/useThemeColors';

const FOTO = 'https://picsum.photos/300';

// App.js sementara untuk menguji komponen (diganti di Modul 4–5)
export default function App() {
  const { colors, isDark } = useThemeColors();
  const [nama, setNama] = useState('');
  const [cari, setCari] = useState('');

  return (
    <SafeAreaProvider>
      <View style={[styles.screen, { backgroundColor: colors.background }]}>
        <HeaderBar title="KatalogKu" subtitle="Uji coba komponen" />
        <ScrollView contentContainerStyle={styles.content}>
          <CustomInput label="Nama" placeholder="Tulis nama..."
            value={nama} onChangeText={setNama}
            error={nama === '' ? 'Nama wajib diisi' : null} />
          <Button title="Sapa" onPress={() => Alert.alert('Halo', nama)} />
          <View style={styles.gap} />
          <Button title="Reset" variant="outline"
            onPress={() => setNama('')} />
          <View style={styles.gap} />
          <Button title="Hapus" variant="danger"
            onPress={() => Alert.alert('Hapus', 'Contoh aksi hapus')} />
          <View style={styles.gap} />
          <Button title="Kirim" disabled />

          <Text style={[styles.section, { color: colors.text }]}>Input dengan ikon</Text>
          <CustomInput icon="search" placeholder="Cari produk..."
            value={cari} onChangeText={setCari} />

          <Text style={[styles.section, { color: colors.text }]}>Rating</Text>
          <Rating value={3.5} size={20} />

          <View style={styles.row}>
            <Card title="Produk A" price={10} image={FOTO} rating={4.5} discount={10} />
            <Card title="Produk B" price={25} image={FOTO} rating={3} />
          </View>
        </ScrollView>
      </View>
      <StatusBar style={isDark ? 'dark' : 'light'} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16 },
  gap: { height: 12 },
  section: { marginTop: 20, marginBottom: 8, fontWeight: 'bold' },
  row: { flexDirection: 'row', marginTop: 16, marginHorizontal: -6 },
});
