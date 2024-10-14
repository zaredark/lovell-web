import React, { useState, useEffect, useRef, useContext } from 'react';
import { Dimensions } from 'react-native';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  //StatusBar,
  FlatList, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { styles } from '../styles/styles';
import { CreateUI } from '../createUI/create-ui';
import { DisableContent } from '../disableScreenContent/disableScreenContent';

const { height } = Dimensions.get('window');

function NavBar() {
  // Estado y funciones para la interfaz para crear o editar libros
  const [isVisible, setIsVisible] = useState(false); // Estado de visibilidad
  const uiAnim = useRef(new Animated.Value(0)).current;

  const showCreateUI = () => {
      setIsVisible(true); // Mostrar visibilidad de la interfaz
      Animated.timing(uiAnim, {
          toValue: -200, // Aparece la interfaz desde el fondo
          duration: 300,
          useNativeDriver: false,
      }).start();
  };

  const hideCreateUI = () => {
      Animated.timing(uiAnim, {
          toValue: height, // Se esconde la interfaz fuera de la pantalla
          duration: 300,
          useNativeDriver: false,
      }).start(() => setIsVisible(false) // Habilitar la interacción globalmente
      ); // Ocultar la visibilidad después de la animación
  };

  const navigation = useNavigation(); // Obtener la instancia de navigation

  return (
    <View style={{backgroundColor: '#acc7fa', borderTopStartRadius: 35, borderTopEndRadius: 35, marginVertical: -2}}>
      <CreateUI isVisible={isVisible} hideCreateUI={hideCreateUI} uiAnim={uiAnim} />
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Pantalla Principal')} style={styles.btnNavBar}>
          <Image style={styles.iconNavBar} source={ require('./../imgs/nav-bar-icons/home.png')} />
          <Text style={styles.nameBtn}>Inicio</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Biblioteca')} style={styles.btnNavBar}>
         <Image style={styles.iconNavBar} source={ require('./../imgs/nav-bar-icons/library.png')} />
         <Text style={styles.nameBtn}>Biblioteca</Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.btnNavBar} onPress={showCreateUI}>
          <Image style={[styles.iconNavBar, {tintColor: '#048bfc'}]} source={ require('./../imgs/imgs-examples/create-icon.png')} />          
          <Text style={styles.nameBtn}>Crear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNavBar} onPress={() => navigation.navigate('Notificaciones')}>
          <Image style={[styles.iconNavBar, {width: 40, height: 40, marginVertical: 1}]} source={ require('./../imgs/imgs-examples/notifications-icon.png')} />          
          <Text style={styles.nameBtn}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNavBar}>
          <Image style={[styles.iconNavBar, {width: 40, height: 40, marginVertical: 1}]} source={ require('./../imgs/imgs-examples/TTS-icon.png')} />          
          <Text style={styles.nameBtn}>Edición</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { NavBar };