import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  FlatList, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Dimensions,
  Animated,
  ActivityIndicator // Importa el indicador de carga
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

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const fetchBookDetails = async () => {
    try {
      const response = await axios.post('https://lovell-web.onrender.com/detailsBook', { titulo: route.params.title });
      setBookDetails(response.data);
    } catch (error) {
      console.error("Error fetching book details:", error);
      // Manejar el error adecuadamente aquí, tal vez estableciendo un estado de error
    } finally {
      setLoading(false); // Cambia el estado de carga al finalizar
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Muestra un indicador de carga
  }

  if (!bookDetails) {
    return <Text>No se encontraron detalles del libro.</Text>; // Mensaje alternativo en caso de que no se encuentren detalles
  }

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={{ marginVertical: 5 }} onPress={() => navigation.navigate('Leer')}>
        <Text>{item.name}{item.value}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackPreviousScreen} style={{ marginTop: 30 }}>
        <Image source={require('./../components/imgs/imgs-examples/backButton.png')} style={{ width: 30, height: 30, marginLeft: 10, marginVertical: 5 }} />
      </TouchableOpacity>
      <ScrollView 
        style={{ marginTop: -90, zIndex: -4 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <Animated.Image
          blurRadius={2.6}
          source={{ uri: bookDetails.portada }}
          style={{
            alignSelf: 'center',
            width: 1300,
            marginTop: 30,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, height],
                  outputRange: [0, -height * 0.3],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
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

        <Image style={[styles.addImageBook, { marginTop: -190, alignSelf: 'center' }]} source={{ uri: bookDetails.portada }} />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{bookDetails.titulo}</Text>
          <Text style={styles.status}>{bookDetails.completo ? 'Completo' : 'En proceso'}</Text>
        </View>
        
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }} onPress={() => navigation.navigate('Perfil')}>
          <Image source={{ uri: bookDetails.icon_user }} style={{ width: 43, height: 43, borderRadius: 40, alignSelf: 'center' }} />
          <Text style={{ marginTop: 5, marginLeft: 10, fontSize: 18 }}>{bookDetails.username}</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text style={styles.stat}>👁 13k Vistas</Text>
          <Text style={styles.stat}>⭐500 Likes</Text>
          <View style={[styles.stat, { flexDirection: 'row' }]}>
            <Image style={{ width: 20, height: 20 }} source={require('./../components/imgs/caps.png')} />
            <Text style={{ fontSize: 15 }}>{bookDetails.cant_capitulos} partes</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Sipnosis</Text>
          <Text style={{ alignSelf: 'center', width: 1000, paddingLeft: 3, color: '#000', borderColor: '#000', borderWidth: 1 }} multiline editable={false}> 
            {bookDetails.sipnosis}
          </Text>
        </View>

        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Categorías</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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

        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Etiquetas</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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

        <View style={{ marginTop: 10, alignSelf: 'center' }}>
          <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>Capítulos</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            style={{ width: '100%' }} // Limita el ancho del FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsBook;