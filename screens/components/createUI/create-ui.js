import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
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
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from '../styles/styles';

const CreateUI = ({ isVisible, hideCreateUI, uiAnim }) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, styles.show]}>
            {isVisible && (
                <TouchableWithoutFeedback onPress={hideCreateUI} >
                    <View style={styles.overlay}>
                        {/* Interfaz animada */}
                        <TouchableWithoutFeedback>
                            <Animated.View style={[styles.interface, { transform: [{ translateY: uiAnim }] }]}>
                                <View>
                                    <Text style={{marginHorizontal: 10, fontWeight: 'bold', marginTop: -20}}>Escribir</Text>
                                    <TouchableOpacity style={styles.buttonUI} onPress={() => navigation.navigate('Crear Historia')}>
                                        <Image source={ require('./../imgs/imgs-examples/create-book-icon.png')} style={[styles.iconUI, styles.marginImgText]} />
                                        <Text style={[styles.marginImgText, styles.textSizeUI]} >Crear historia</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonUI} onPress={() => navigation.navigate('Editar Historia')}>
                                    <Image source={ require('./../imgs/imgs-examples/book-and-pen.png')} style={[styles.iconUI, styles.marginImgText]} />
                                        <Text style={[styles.marginImgText, styles.textSizeUI]} >Editar historias</Text>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

export { CreateUI };