import React, { useContext, useState, useEffect } from 'react';
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
} from 'react-native';

import { styles } from './components-for-screens/styles/styles';
import { useGoBackPreviousScreen } from './components-for-screens/goBack/goBack';

const Search = ({ navigation }) => {
    const { goBackPreviousScreen } = useGoBackPreviousScreen();

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginVertical: 40}}>
                <TouchableOpacity onPress={goBackPreviousScreen}>
                    <Image source={ require('./../imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginHorizontal: 20}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Buscar')}>
                    <Text>🔎 Buscar historias, usuarios</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Text style={[styles.category, {marginTop: '10%'}]}>Resultados</Text>
                <TouchableOpacity style={styles.standBooks} onPress={() => navigation.navigate('Detalles')}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.bookPhoto} source={ require('./../imgs/imgs-examples/banner.jpg') } />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={[styles.titleBook, {marginLeft: '1%'}]}>Titulo 1 - Titulo de Prueba</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                              <Image style={styles.iconCaps} source={ require('./../imgs/caps.png') } />
                              <Text style={{marginHorizontal: 1}}>11 partes</Text>
                              <Text style={styles.status}>Completo</Text>
                            </View>
                            <Text style={{marginLeft: '1%', width: '25%', flexWrap: 'wrap'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                              aliqua. Ut enim ad minim veniam, qui
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

export default Search;