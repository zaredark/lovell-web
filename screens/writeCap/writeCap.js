import React from "react";

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

import { styles } from "../components/styles/styles";
import EditorScreen from "../components/createSheet/createSheet";
import { useGoBackPreviousScreen } from '../components/goBack/goBack'

const WriteCap = () => {
    const { goBackPreviousScreen } = useGoBackPreviousScreen();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
            </TouchableOpacity>
            <ScrollView>
                <View>
                    <TouchableOpacity style={{alignItems: 'center', marginTop: 30, flexDirection: 'column'}}>
                        <Image style={{width: 50, height: 50}} source={ require('../components/imgs/imgs-examples/create-book-icon.png')} />
                        <Text style={{marginTop: 20}}>Añadir portada</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#dfdfdf', width: "auto", height: 2, marginTop: 15}}/>
                <TextInput 
                    style={{textAlign: 'center', fontSize: 20}}
                    placeholder="Titulo aquí"
                />
                <View style={{backgroundColor: '#dfdfdf', width: "auto", height: 2, marginTop: 10}}/>
                <EditorScreen />
            </ScrollView>
        </View>
    )
};

export default WriteCap;