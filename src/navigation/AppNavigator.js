import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator }
  from '@react-navigation/native-stack';
import { createBottomTabNavigator }
  from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritScreen from '../screens/FavoritScreen';
import CartScreen from '../screens/CartScreen';
import ProfilScreen from '../screens/ProfilScreen';
import TentangScreen from '../screens/TentangScreen';
import { useThemeColors } from '../hooks/useThemeColors';
import { useFavorit } from '../context/FavoritContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ICONS = { Beranda: 'home', Favorit: 'heart', Keranjang: 'cart', Profil: 'person' };

// Tab bawah: Beranda | Favorit | Keranjang | Profil
function TabNavigator() {
  const { colors } = useThemeColors();
  const { favorit } = useFavorit();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name]} size={size}
            color={color} />
        ),
      })}>
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Favorit" component={FavoritScreen}
        options={{
          // undefined = badge disembunyikan saat favorit kosong
          tabBarBadge: favorit.length || undefined,
          tabBarBadgeStyle: { backgroundColor: colors.danger, color: colors.onPrimary },
        }} />
      <Tab.Screen name="Keranjang" component={CartScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}

// Stack utama: Tab (Main) -> Detail / Tentang (menutupi tab bar)
export default function AppNavigator() {
  const { colors, isDark } = useThemeColors();
  const base = isDark ? DarkTheme : DefaultTheme;
  // Tema navigasi ikut palet KatalogKu agar latar saat transisi tidak berkedip putih/hitam
  const theme = {
    ...base,
    colors: {
      ...base.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Tentang" component={TentangScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
