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
    const { term } = route.params; // Recibe el término de búsqueda

    const [books, setBooks] = useState([]); // Estado para los resultados de búsqueda
    const [searchTerm, setSearchTerm] = useState(term || ''); // Estado del término de búsqueda


    useEffect(() => {
      fetchResults();
    }, []);

    const fetchResults = async () => {
      try {
        const response = await fetch('https://lovell-web.onrender.com/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ search: searchTerm }),
        });
        const data = await response.json();
        if (response.ok) {
          setBooks(data); // Actualiza el estado con los libros encontrados
        } else {
          console.error('Error:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handlePress = async (item) => {
        try {
          const { titulo } = item; // Obtener el título del libro
  
          // Enviar el título al backend
          const response = await axios.post('https://tu-api.com/buscar-libro', { titulo });
  
          // Manejar la respuesta del servidor
          console.log('Respuesta del servidor:', response.data);
  
          // Navegar a la pantalla de detalles
          navigation.navigate('Detalles', { book: item });
        } catch (error) {
          console.error('Error al enviar el título:', error);
          Alert.alert('Error', 'No se pudo enviar el título al servidor.');
        }
    };

  const renderBookItem = ({ item }) => (

    <TouchableOpacity 
      style={styles.standBooks} 
      onPress={handlePress(item)}
    >
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
            <Text style={styles.status}>
              {item.completo ? 'Completo' : 'En progreso'}
            </Text>
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
          onSubmitEditing={fetchResults} // Actualiza los resultados al presionar enter
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