import React, { useContext, useRef, useState, useEffect } from 'react';

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
  Modal
} from 'react-native';

import { styles } from './../components/styles/styles';

const Main = ({navigation}) => {
  //const [isMenuVisible, setMenuVisible] = useState(false);
  //const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const [searchTerm, setSearchTerm] = useState('');

  const searchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: searchTerm }),
      });

      const data = await response.json();
      if (response.ok) {
        setBooks(data); // Actualiza el estado con los resultados
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleSearch = ( )=> {
    searchBooks()
    navigation.navigate('Buscar')
  }
 
  return (      
    <View style={styles.container}>
      <View style={{borderBottomColor: "#dfdfdf", borderBottomWidth: 1, marginTop: '-2%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Pantalla Principal')}>
          <Image style={styles.logo} source={ require('../components/imgs/imgs-examples/lovell-logo-ver2.png')}/>
        </TouchableOpacity>
        <TextInput style={styles.searchBar}
          placeholder="Buscar historias, usuarios"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
        <View style={{flexDirection: 'row', marginTop: '-5%', marginLeft: '80%', marginVertical: 30}}>
          <TouchableOpacity style={{marginLeft: '5%'}} onPress={() => navigation.navigate('Crea una historia')}>
            <Text style={{fontSize: 23, textAlign: 'center', backgroundColor: '#41f0b5', width: 80, borderRadius: 5}}>Crear</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Biblioteca')}>
            <Image
              source={ require('../components/imgs/nav-bar-icons/library.png')} 
              style={{
                width: 40,
                height: 40,
              }} 
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Notificaciones')}>
            <Image 
              source={ require('../components/imgs/imgs-examples/notifications-icon.png')}
              style={{
                width: 40,
                height: 40,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Perfil')}>
            <Image 
              source={ require('../components/imgs/imgs-examples/profile.png')}
              style={{
                width: 40,
                height: 40,
                alignSelf: 'flex-end',
              }} 
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false} // para ocultar la barra de desplazamiento
        showsVerticalScrollIndicator={true}
      >
        <View style={{alignItems: 'center'}}>
          <View style={[styles.standBooks, {backgroundColor: '#41f0b5', borderRadius: 5, marginLeft: '1%', width: '73%'}]}>
            <Text style={styles.category}>Seguir Leyendo</Text>
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={true} 
              style={{flexDirection: 'row'}}
            >
              <View style={{flexDirection: 'column', alignItems: 'left'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Leer')}>
                    <Image style={styles.bookPhoto} source={ require('../components/imgs/imgs-examples/banner.jpg') } />
                  </TouchableOpacity>

                  <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
                  <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
                  <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
                  <Image style={styles.bookPhoto} source={ require('../components/imgs/xokas2.jpg') } />
                </View>

                <View>
                  <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Historias Premium</Text>
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Detalles')}>
                <Image style={styles.bookPhoto} source={ require('../components/imgs/imgs-examples/banner.jpg') } />
              </TouchableOpacity>
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>

          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Completos</Text>

            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>
          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Recomendados</Text>

            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>
          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Historias que enamoran</Text>

            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>
          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Terror</Text>

            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>
          </View>

          <View style={styles.standBooks}>
            <Text style={styles.category}>Ciencia Ficción</Text>

            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false} 
              style={{flexDirection: 'row'}}
            >
              <Image style={styles.bookPhoto} source={ require('../components/imgs/xokasLibro.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/bnha.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/fnaf.png') } />
              <Image style={styles.bookPhoto} source={ require('../components/imgs/unicorniovolador.png') } />
            </ScrollView>

            <View>
                <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.iconCaps} source={ require('../components/imgs/caps.png') } />
                  <Text style={{marginHorizontal: 1}}>11 partes</Text>
                  <Text style={styles.status}>Completo</Text>
                </View>

                <Text style={{marginHorizontal: 10}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, qui
                </Text>
            </View>
          </View>
        </View>

      </ScrollView>

    </View>
  )  
}

export default Main;