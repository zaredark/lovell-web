import React, { useState, useEffect } from 'react';
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
  TextInput
} from 'react-native';

import { styles } from '../styles/styles';

function Stand( { number } ) {    
    return (
        <View style={{marginTop: 30}}>
            <TextInput style={[styles.category, {marginVertical: -10}]}>Categoría {number}</TextInput>
            <ScrollView 
                style={styles.standSection}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.standBooks}>
                    <View>
                        <View style={styles.flexLibrary}>
                            <View>
                                <Image style={styles.photoBookLibrary} source={ require('./../../../imgs/xokasLibro.png')} />
                                <Text style={styles.titleBookLibrary}>Title 1</Text>
                            </View>
                            <View>
                                <Image style={styles.photoBookLibrary} source={ require('./../../../imgs/fnaf.png')} />
                                <Text style={styles.titleBookLibrary}>Title 2</Text>
                            </View>
                            <View>
                                <Image style={styles.photoBookLibrary} source={ require('./../../../imgs/unicorniovolador.png')} />
                                <Text style={styles.titleBookLibrary}>Title 3</Text>
                            </View>
                            <View>
                                <Image style={styles.photoBookLibrary} source={ require('./../../../imgs/watafa.png')} />
                                <Text style={styles.titleBookLibrary}>Title 4</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export { Stand };