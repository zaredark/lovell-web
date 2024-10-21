import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  FlatList, 
  TouchableOpacity, 
  Image, 
  TextInput, 
} from 'react-native';

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const Search = ({ navigation, route }) => {
  const { goBackPreviousScreen } = useGoBackPreviousScreen();
  const { term } = route.params || ''; // Recibe el término de búsqueda inicial

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(term);

  // Ejecuta fetchResults cada vez que cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm) fetchResults();
  }, [searchTerm]);

  // Consulta POST para buscar libros
  const fetchResults = async () => {
    try {
      const response = await fetch('https://lovell-web.onrender.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: searchTerm }),
      });

      const data = await response.json();
      if (response.ok) {
        setBooks(data);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error en la consulta:', error);
    }
  };

  // Maneja la selección de un libro y solicita detalles con Axios
  const handlePress = async (item) => {
    try {
      console.log('Enviando título:', item.titulo); // Verifica el título
      const response = await axios.post('https://lovell-web.onrender.com/detailsBook', {
        titulo: item.titulo, // Enviar título en el cuerpo del POST
      });
      
      const data = response.data;
      console.log('Respuesta del servidor:', data); // Verifica la respuesta
      
      if (data.success) {
        navigation.navigate('Detalles', { data: data.data });
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error al obtener detalles del libro:', error);
    }
  };

  // Renderiza cada libro en la lista
  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.standBooks} onPress={() => handlePress(item)}>
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={styles.bookPhoto} 
          source={{ uri: item.portada }} 
          resizeMode="cover" 
        />
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={styles.titleBook}>{item.titulo}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
            <Image 
              style={styles.iconCaps} 
              source={require('./../components/imgs/caps.png')} 
            />
            <Text style={{ marginHorizontal: 5 }}>{item.cant_capitulos} partes</Text>
            {item.completo ? 
              <Text style={styles.status}>
                Completo
              </Text> : 
              <Text style={[styles.status, {backgroundColor: '#8534e6',}]}>
                En proceso
              </Text>}
            
          </View>
          <Text style={{ marginTop: 5, width: '75%' }}>
            {item.sipnosis.substring(0, 100)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginVertical: 40, alignItems: 'center' }}>
        <TouchableOpacity onPress={goBackPreviousScreen}>
          <Image 
            source={require('./../components/imgs/imgs-examples/backButton.png')} 
            style={{ width: 30, height: 30, marginHorizontal: 20 }} 
          />
        </TouchableOpacity>
        <TextInput
          placeholder='🔎 Buscar historias, usuarios'
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={{ flex: 1, borderBottomWidth: 1, marginRight: 10 }}
          onSubmitEditing={fetchResults} 
        />
      </View>

      <Text style={[styles.category, { marginTop: 10 }]}>Resultados</Text>

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