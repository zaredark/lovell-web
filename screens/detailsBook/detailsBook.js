import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
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
  Dimensions,
  Animated
} from 'react-native';

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const { height } = Dimensions.get('window');

const DATA = [
  { id: '1', name: 'Capitulo 1', value: '' },
  { id: '2', name: 'Capitulo 2', value: '' },
  { id: '3', name: 'Capitulo 3', value: '' },
];

const DetailsBook = ({ navigation, route }) => {
  const { goBackPreviousScreen } = useGoBackPreviousScreen();

  const scrollY = React.useRef(new Animated.Value(0)).current; // Usar useRef para crear la referencia de scrollY

  const [bookDetails, setBookDetails] = useState(null);
  
  // Asumiendo que el ID del libro se pasa a través de las props de navegación
  const { bookId } = route.params;

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://tu-api.com/books/${bookId}`); // Cambia esta URL a tu API real
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) {
    return <Text>Cargando...</Text>; // Cargar un spinner o un mensaje mientras obtienes los datos
  }

  const renderItem = ({ item }) => (
    <View>
        <TouchableOpacity style={{marginVertical: 5}} onPress={() => navigation.navigate('Leer')}>
            <Text>{item.name}{item.value}</Text>
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
          <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
        </TouchableOpacity>
        <ScrollView 
          style={{marginTop: -90, zIndex: -4}}
          contentContainerStyle={{ paddingBottom: 20 }}
          scrollEventThrottle={16} // Controla la frecuencia de eventos de desplazamiento
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          {/* Fondo que se desplaza más lento */}
          <Animated.Image
            blurRadius={2.6}
            source={{ uri: bookDetails.portada }} // URL de imagen
            style={[
              {
                alignSelf: 'center',
                width: 1300,
                marginTop: 30
              },
              {
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, height],
                      outputRange: [0, -height * 0.3], // Movimiento más lento (30%)
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
            resizeMode="cover"
          />

          <LinearGradient
             colors={['transparent', '#fff' ,'#fff']}
             style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '45%',
                opacity: 0.997
             }}
          />
            
          {/* <Image style={styles.background} source={ require('./../components/imgs/imgs-examples/banner.jpg')} blurRadius={2.6} /> */}
          <Image style={[styles.addImageBook, {marginTop: -190, alignSelf: 'center'}]} source={{ uri: bookDetails.portada }} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{textAlign: 'center',fontSize: 18, fontWeight: 'bold'}}>{bookDetails.titulo}</Text>
            <Text style={styles.status}>{bookDetails.completo ? 'Completo' : 'En proceso'}</Text>
          </View>
          
          <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}} onPress={() => navigation.navigate('Perfil')}>
            <Image source={{ uri: bookDetails.icon_user}} style={{width: 43, height: 43, borderRadius: 40, alignSelf: 'center'}} />
            <Text style={{marginTop: 5, marginLeft: 10, fontSize: 18}}>{bookDetails.username}</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.stat}>👁 13k Vistas</Text>
              <Text style={styles.stat}>⭐500 Likes</Text>
              <View style={[styles.stat, {flexDirection: 'row'}]} >
                <Image style={{width: 20, height: 20}} source={ require('./../components/imgs/caps.png')}/>
                <Text style={{fontSize: 15}}>{bookDetails.cant_capitulos} partes</Text>
              </View>
          </View>

          <View style={styles.form}>
            <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Sipnosis</Text>
            <Text style={{alignSelf: 'center', width: 1000, paddingLeft: 3, color: '#000', borderColor: '#000', borderWidth: 1}} multiline={true} editable={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              {bookDetails.sipnosis}
            </Text>
          </View>

          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Categorías</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>Ciencia Ficción</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>Fantasía</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>Acción</Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Etiquetas</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>La Maliss</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>de la portada</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>está</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>re god</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>papá</Text>
              </View>
              <View style={styles.categoryDetails}>
                <Text style={styles.categoryText}>nasheeeeei</Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10, alignSelf: 'center'}}>
            <Text style={{marginLeft: 10, fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>Derechos de Autor</Text>
            <Text style={{marginLeft: 10}}>© Todos los derechos reservados.</Text>
          </View>

          <View style={[styles.form, {marginTop: 10, alignItems: 'center'}]}>
            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold'}}>Tablón de capítulos</Text>
            <View style={{borderColor: '#000', borderWidth: 1, marginHorizontal: 30}}>
                <FlatList
                  style={{marginLeft: 10, width: 500}}
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  nestedScrollEnabled={false}  // Habilitar scroll anidado
                />
            </View>
          </View>

          <TouchableOpacity style={[styles.buttonCreate, {marginTop: 10, alignSelf: 'center'}]} onPress={() => navigation.navigate('Leer')}>
            <Text style={{marginTop: 5, color: '#efefef', fontWeight: 'bold', fontSize: 18}}>Leer</Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
  )
};

export default DetailsBook;