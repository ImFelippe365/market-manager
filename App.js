import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { AuthProvider } from './src/contexts/AuthContext'
import Routes from './src/routes';
import { ItemProvider } from './src/contexts/ItemContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded)
    return null
  return (
    <AuthProvider>
      <ItemProvider>
        <StatusBar style="auto" />
        <Routes />
      </ItemProvider>
    </AuthProvider>
  );
}