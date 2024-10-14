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

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const CreateScreen = ({navigation}) => {
    const { goBackPreviousScreen } = useGoBackPreviousScreen();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
              <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator>
                <Text style={[styles.category, {marginVertical: 30, marginHorizontal: 12}]} >Crear</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Crear Historia')}
                    style={{backgroundColor: '#41f0b5', borderRadius: 10, width: '18%', marginLeft: '5%'}}    
                > 
                    <Text style={{fontSize: 18, textAlign: 'center'}}><Text style={{fontWeight: 'bold'}}>+</Text> Crear una nueva historia.</Text>
                </TouchableOpacity>
                <View style={{marginVertical: 30, marginHorizontal: 8}}>
                  <Text style={[styles.category, {alignSelf: 'left', marginHorizontal: 8}]}>Edita una historia</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}} onPress={() => navigation.navigate('Detalles Editar Historia')}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokasLibro.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/bnha.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/fnaf.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/unicorniovolador.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/watafa.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokas2.jpg')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center', marginLeft: '3%'}}>
                          <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokasLibro.png')} />
                          <Text style={styles.titleBookLibraryArchived}>Title 7</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default CreateScreen;