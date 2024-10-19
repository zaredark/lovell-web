import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Redirige automáticamente a la pantalla principal en caso de error
    navigation.replace('Pantalla Principal');
  }, [navigation]);

  return null;
}