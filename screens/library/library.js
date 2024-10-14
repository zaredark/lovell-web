import React, { useState, useEffect, useRef } from 'react';

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
  Animated
} from 'react-native';

import { NavBar } from '../components/navbar/navbar';
import { styles } from '../components/styles/styles';
import { BarSelection, ElementsLibrary } from '../components/barSelection/ElementsLibrary';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const Library = () => {
  // Estado y funciones para la interaccion de la barra de la opcion seleccionada
  const [selectedOption, setSelectedOption] = useState('guardados');  // Estado para la opción seleccionada
  const [selectedDirection, setSelectedDirection] = useState('guardados'); // Estado para la dirección seleccionada

  const handleSlideBarSelection = (direction) => {
    setSelectedDirection(direction); // Actualiza la dirección seleccionada
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);  // Actualiza la opción seleccionada
  };

  const handleSelectOption = (option) => {
    handleSelectedOption(option);
    handleSlideBarSelection(option);
  };

  return(
      <View style={styles.container}>
        <View style={{borderBottomColor: "#dfdfdf", borderBottomWidth: 1, marginTop: '-2%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Pantalla Principal')}>
            <Image style={styles.logo} source={ require('./../components/imgs/imgs-examples/lovell-logo-ver2.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchBar}>
            <Text>🔎 Buscar historias, usuarios</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: '-5%', marginLeft: '80%', marginVertical: 30}}>
            <TouchableOpacity style={{marginLeft: '5%'}} onPress={() => navigation.navigate('Crear Historia')}>
              <Text style={{fontSize: 23, textAlign: 'center', backgroundColor: '#41f0b5', width: 80, borderRadius: 5}}>Crear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Biblioteca')}>
              <Image
                source={ require('./../components/imgs/nav-bar-icons/library.png')} 
                style={{
                  width: 40,
                  height: 40,
                }} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Notificaciones')}>
              <Image 
                source={ require('./../components/imgs/imgs-examples/notifications-icon.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Perfil')}>
              <Image 
                source={ require('./../components/imgs/imgs-examples/profile.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'flex-end',
                }} 
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={{alignSelf: 'center'}}>
            <Text style={[styles.category, {marginHorizontal: 10}]}>Biblioteca</Text>

            <View style={{height: 40}}>
              <View style={styles.options}>

                <TouchableOpacity onPress={() => handleSelectOption('guardados')}>
                  <Text style={styles.btnOption}>Guardados</Text>
                </TouchableOpacity>

                  {/* <TouchableOpacity onPress={() => handleSelectOption('listaLecturas')}>
                  <Text style={styles.btnOption}>Lista de lecutras</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => handleSelectOption('archivos')}>
                  <Text style={styles.btnOption}>Archivos</Text>
                </TouchableOpacity>

                </View>

                < BarSelection direction={selectedDirection} />
            </View>

            <ElementsLibrary option={selectedOption} />
          </View>
        </ScrollView>
        
        
      </View>
  )
}

export default Library;