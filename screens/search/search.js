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
import { db } from '../components/firebase/firebase';

const Search = ({ navigation}) => {
  
    const { goBackPreviousScreen } = useGoBackPreviousScreen();
    const [titulo, setTitulo] = useState('');
    const [resultados, setResultados] = useState([]);
  
    const buscarLibros = async () => {
      try {
        const librosRef = db.collection('libros'); 
        const snapshot = await librosRef.where('titulo', '<=', titulo).where('titulo', '<=', titulo + '\uf8ff').get();
    
        const resultados = [];
        snapshot.forEach((doc) => {
          resultados.push({ id: doc.id, ...doc.data() });
        });
    
        setResultados(resultados);
      } catch (error) {
        console.error('Error buscando libros:', error);
      }
    };


  // Renderiza cada libro en la lista
  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.standBooks} onPress={() => handlePress(item)}>
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={styles.bookPhoto} 
          source={{ uri: item.portada }} // Se asume que 'portada' contiene la URL de la imagen
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
              <Text style={[styles.status, { backgroundColor: '#8534e6' }]}>
                En proceso
              </Text>}
          </View>
          <Text style={{ marginTop: 5, width: '75%' }}>
            {item.sipnosis?.substring(0, 100) || 'Sin sinopsis disponible'}...
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
          placeholder='🔎 Buscar libros por título'
          value={titulo} // Cambiado a "titulo" para la búsqueda específica
          onChangeText={setTitulo}
          style={{ flex: 1, borderBottomWidth: 1, marginRight: 10 }}
          onSubmitEditing={buscarLibros} // Llama a la función de búsqueda
        />
      </View>
  
      <Text style={[styles.category, { marginTop: 10 }]}>Resultados</Text>
  
      {resultados.length > 0 ? (
        <FlatList 
          data={resultados}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBookItem}
        />
      ) : (
        <Text style={styles.noResults}>No se encontraron libros con ese título.</Text>
      )}
    </View>
  );
};

export default Search;