import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  FlatList, 
  TouchableOpacity, 
  Image, 
  ScrollView,
} from 'react-native';

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const Search = ({ navigation }) => {
  const { goBackPreviousScreen } = useGoBackPreviousScreen();

  // Estado para almacenar los resultados de la búsqueda
  const [books, setBooks] = useState([]);

  // Función para obtener los libros desde la API
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://lovell-web.onrender.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: response.data }) // Ajusta según lo que busques
      });

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Cargar los libros al iniciar el componente
  useEffect(() => {
    fetchBooks();
  }, []);

  // Renderiza cada libro en la lista
  const renderBookItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.standBooks} 
      onPress={() => navigation.navigate('Detalles')}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={styles.bookPhoto} 
          source={{ uri: item.portada }} // Enlace dinámico desde la API
          resizeMode="cover" 
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={[styles.titleBook, { marginLeft: '1%' }]}>
            {item.titulo}
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Image 
              style={styles.iconCaps} 
              source={require('./../components/imgs/caps.png')} 
            />
            <Text style={{ marginHorizontal: 1 }}>{item.cant_capitulos} partes</Text>
            <Text style={styles.status}>
              {item.completo ? 'Completo' : 'En progreso'}
            </Text>
          </View>
          <Text style={{ marginLeft: '1%', width: '25%', flexWrap: 'wrap' }}>
            {item.sipnosis.substring(0, 100)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginVertical: 40 }}>
        <TouchableOpacity onPress={goBackPreviousScreen}>
          <Image 
            source={require('./../components/imgs/imgs-examples/backButton.png')} 
            style={{ width: 30, height: 30, marginHorizontal: 20 }} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.searchBar} 
          onPress={() => navigation.navigate('Buscar')}
        >
          <Text>🔎 Buscar historias, usuarios</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.category, { marginTop: '10%' }]}>Resultados</Text>

      <FlatList 
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBookItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default Search;