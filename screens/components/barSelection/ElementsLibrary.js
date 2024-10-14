import React, { useRef, useEffect, useState } from 'react';
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

import { styles } from '../styles/styles';
import { Stand } from '../stand-library/stand-library';



const BarSelection = ({ direction }) => {
  const marginAnim = useRef(new Animated.Value(260)).current; // Valor inicial de la animación
  const widthAnim = useRef(new Animated.Value(80)).current;

  const slideBarSelection = () => {
    let toValueSlide = 260;
    let toValueWidth = 60;

    if (direction === 'guardados') {
      toValueSlide = 260;
      toValueWidth = 60;
    } else if (direction === 'listaLecturas') {
      toValueSlide = 128;
      toValueWidth = 120;
    } else if (direction === 'archivos') {
      toValueSlide = 300;
      toValueWidth = 50;
    }

    Animated.parallel([
      Animated.timing(marginAnim, {
        toValue: toValueSlide,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(widthAnim, {
        toValue: toValueWidth,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    slideBarSelection();
  }, [direction]); // Llama a la animación cuando la dirección cambia

  return (
    <Animated.View
      style={[
        styles.content,
        {
          marginHorizontal: marginAnim, // Anima el margen horizontal
          width: widthAnim, // Anima el ancho
        },
      ]}
    >
      <View style={styles.selectedOption} />
    </Animated.View>
  );
};

const ElementsLibrary = ({ option }) => {
  const [currentContent, setCurrentContent] = useState(option);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Valor inicial para la opacidad

  const [stands, setStands] = useState([]); // Estado para la creación del stand

  const addStand = () => {
    setStands([...stands, <Stand key={stands.length} number={stands.length + 1} />]);
  };

  const changeContent = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // pa que sea invisible
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Cambia el estado después de que termine la animación
      setCurrentContent(option);

      // Hace que el nuevo elemento aparezca
      Animated.timing(fadeAnim, {
        toValue: 1,  // Hace que la opacidad vuelva a 1 (visible)
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }

  useEffect(() => {
    changeContent();
  }, [option]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {currentContent === 'guardados' && (
        <View>
          <Text style={[styles.category, {marginTop: 20}]}>Tus Libros Guardados</Text>
          <ScrollView 
            style={styles.standSection}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.standBooks}>
                <Image style={styles.photoBookLibrary} source={ require('./../imgs/xokasLibro.png')} />
                <Text style={styles.titleBookLibrary}>Title 1</Text>
            </View>
            <View style={styles.standBooks}>
                <Image style={styles.photoBookLibrary} source={ require('./../imgs/imgs-examples/banner.jpg')} />
                <Text style={styles.titleBookLibrary}>Title 2</Text>
            </View>
            <View style={styles.standBooks}>
                <Image style={styles.photoBookLibrary} source={ require('./../imgs/xokas2.jpg')} />
                <Text style={styles.titleBookLibrary}>Title 3</Text>
            </View>
            <View style={styles.standBooks}>
                <Image style={styles.photoBookLibrary} source={ require('./../imgs/watafa.png')} />
                <Text style={styles.titleBookLibrary}>Title 4</Text>
            </View>
          </ScrollView>

          {stands.map((stand, index) => (
            <View key={index}>
              {stand}
            </View>
          ))}

          <TouchableOpacity onPress={addStand} style={styles.createStand}>
            <Text>+ Crear Estante</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentContent === 'archivos' && (
        <View>
          <Text style={styles.category}>Archivados</Text>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/xokasLibro.png')} />
            <Text style={styles.titleBookLibraryArchived}>Title 1</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/fnaf.png')} />
            <Text style={styles.titleBookLibraryArchived}>Title 2</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/imgs-examples/banner.jpg')} />
            <Text style={styles.titleBookLibraryArchived}>Title 3</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/watafa.png')} />
            <Text style={styles.titleBookLibraryArchived}>Title 4</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/xokas2.jpg')} />
            <Text style={styles.titleBookLibraryArchived}>Title 5</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/bnha.png')} />
            <Text style={styles.titleBookLibraryArchived}>Title 6</Text>
          </View>
          <View style={styles.archived}>
            <Image style={styles.photoBookLibrary} source={ require('./../imgs/xokasLibro.png')} />
            <Text style={styles.titleBookLibraryArchived}>Title 7</Text>
          </View>
        </View>
      )}
    </Animated.View>

  )
}

export { BarSelection, ElementsLibrary };