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
  Dimensions,
  Animated
} from 'react-native';

import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const { height } = Dimensions.get('window');

const Read = () => {
  const { goBackPreviousScreen } = useGoBackPreviousScreen();
  const scrollY = React.useRef(new Animated.Value(0)).current; // Usar useRef para crear la referencia de scrollY
  
  const text = `
Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt pulvinar pretium laoreet commodo,
vehicula felis cursus diam ligula inceptos ridiculus potenti sociis purus. Porttitor ultricies metus 
semper netus leo dictum interdum molestie in, nisl nibh venenatis cras habitasse congue suspendisse 
nascetur senectus, odio quis lobortis dignissim fermentum volutpat primis velit. 

Consequat habitant aliquet egestas integer ad tellus et sapien cursus cubilia, fusce tempor eleifend 
semper ac himenaeos mauris ut non, senectus vestibulum bibendum nibh nam fermentum habitasse posuere etiam.

Ultricies semper tellus convallis porttitor posuere pharetra augue tortor est fames cursus dictumst natoque, 
mauris parturient quam senectus nibh diam odio magna inceptos eget cubilia.

Eleifend hendrerit per gravida cursus dictumst maecenas inceptos diam, vestibulum ornare suspendisse felis 
commodo cum iaculis convallis eros, dignissim hac nibh nascetur scelerisque ligula fermentum.

Nibh curae ultricies nullam diam egestas varius dictum nisl, commodo sociis erat suspendisse sapien augue 
non, magnis vehicula tellus ridiculus dignissim nostra ante.
  `;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
        <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View>
          <Image style={styles.cover} source={ require('./../components/imgs/imgs-examples/banner.jpg')}/>
        </View>
        <View style={{marginTop: -10}}>
          <View style={{backgroundColor: '#dfdfdf', width: "auto", height: 2, marginTop: 15}}/>
            <Text style={{textAlign: 'center', fontSize: 20}}>Titulo de Prueba</Text>
          <View style={{backgroundColor: '#dfdfdf', width: "auto", height: 2, marginTop: 10}}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>
            {text}
          </Text>
          <View style={styles.ambient}>
            <Text 
              style={
                {
                  textAlign: 'center', 
                  fontFamily: 'Baliana.otf',
                  marginTop: 200,
                  marginBottom: -270
                }}
            >
              {text}
              {text}
            </Text>
            <Image
              source={ require('./../components/imgs/sheetsCaps/1.jpg')}
              style={
                {
                  zIndex: -50,
                  marginTop: '-70%',
                  width: '110%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }
              }
            />
          </View>
          <Text>
            {text}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Read;