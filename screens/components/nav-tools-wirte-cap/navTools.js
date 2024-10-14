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

import { styles } from '../styles/styles';

function NavTools() {
    return (
        <View style={{marginVertical: -42, backgroundColor: '#95d1ff', height: 60, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/size.png')} style={styles.iconNavTools} />
                        <Text>Tamaño</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/font.png')} style={styles.iconNavTools} />
                        <Text>Fuente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/bold.png')} style={styles.iconNavTools} />
                        <Text>Negrita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/cursiva.png')} style={styles.iconNavTools} />
                        <Text>Cursiva</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/alinear.png')} style={styles.iconNavTools} />
                        <Text>Alinear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/espaciado.png')} style={styles.iconNavTools} />
                        <Text>Espaciado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/img.png')} style={styles.iconNavTools} />
                        <Text>Insertar Imagen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/video.png')} style={styles.iconNavTools} />
                        <Text>Insertar video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/audio.png')} style={styles.iconNavTools} />
                        <Text>Insertar Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNavTools}>
                        <Image source={ require('./../imgs/imgs-examples/letter.png')} style={styles.iconNavTools} />
                        <Text>Crear Nota</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export { NavTools };