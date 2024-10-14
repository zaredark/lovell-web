import React, { useContext, useState, useEffect } from 'react';

import Checkbox from 'expo-checkbox';
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
import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const EditBook = ({ navigation }) => {
  const { goBackPreviousScreen } = useGoBackPreviousScreen()

    return (
        <View style={[styles.container, {marginVertical: 40}]}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
              </TouchableOpacity>
              <Text style={[styles.category, {alignSelf: 'center'}]}>Editar historia</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginVertical: 30, marginHorizontal: 8}}>
                    <TouchableOpacity style={styles.archived} onPress={() => navigation.navigate('Detalles Editar Historia')}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokasLibro.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/bnha.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/fnaf.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/unicorniovolador.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/watafa.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokas2.jpg')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.archived}>
                      <Image style={styles.photoBookLibrary} source={ require('./../components/imgs/xokasLibro.png')} />
                      <Text style={styles.titleBookLibraryArchived}>Title 7</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditBook;