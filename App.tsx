import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';



export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
      />
    { fontsLoaded? <Home /> : <Loading /> }
    </Background>
  );
}