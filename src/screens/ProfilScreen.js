import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import useForm from '../hooks/useForm';
import { validateProfil } from '../utils/validators';
import { useThemeColors } from '../hooks/useThemeColors';

const AWAL = { nama: '', email: '', hp: '', password: '', konfirmasi: '' };

export default function ProfilScreen({ navigation }) {
  const { colors } = useThemeColors();
  const { values, errors, handleChange, handleSubmit, reset, hasEmpty } =
    useForm(AWAL, validateProfil);

  const simpan = (data) => {
    Alert.alert('Berhasil', `Profil ${data.nama} tersimpan!`);
    reset();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar title="Profil" subtitle="Lengkapi data akunmu" />
      <ScrollView contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets>
        <CustomInput label="Nama Lengkap" value={values.nama}
          onChangeText={handleChange('nama')} error={errors.nama} />
        <CustomInput label="Email" value={values.email}
          keyboardType="email-address" autoCapitalize="none"
          onChangeText={handleChange('email')} error={errors.email} />
        <CustomInput label="No. HP" value={values.hp}
          keyboardType="phone-pad"
          onChangeText={handleChange('hp')} error={errors.hp} />
        <CustomInput label="Password" value={values.password}
          secureTextEntry onChangeText={handleChange('password')}
          error={errors.password} />
        <CustomInput label="Ulangi Password" value={values.konfirmasi}
          secureTextEntry onChangeText={handleChange('konfirmasi')}
          error={errors.konfirmasi} />
        <Button title="Simpan Profil" onPress={handleSubmit(simpan)}
          disabled={hasEmpty} />
        <View style={styles.gap} />
        {/* Latihan Modul 5: Tentang ada di Stack, jadi terbuka di atas tab bar */}
        <Button title="Tentang Aplikasi" variant="outline"
          onPress={() => navigation.navigate('Tentang')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  form: { padding: 16 },
  gap: { height: 12 },
});
