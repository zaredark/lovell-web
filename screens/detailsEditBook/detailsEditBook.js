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

const DATA = [
    { id: '1', name: 'Capitulo 1', value: ' - Publicado el 24/09/2024.' },
    { id: '2', name: 'Capitulo 2', value: ' - Publicado el 24/09/2024.' },
    { id: '3', name: 'Capitulo 3', value: ' - Borrador.' },
];

const DetailsEditBook = ({ navigation }) => {
    const [isChecked1, setIsChecked1] = useState(false); // Estado para el checkbox 1
    const [isChecked2, setIsChecked2] = useState(false); // Estado para el checkbox 2

    const [openMenu, setOpenMenu] = useState(false);
    const [value1, setValue1] = useState(null);

    const [value2, setValue2] = useState(null);

    const [value3, setValue3] = useState(null);

    const [itemsAudiencia, setItemsAudiencia] = useState([
      { label: 'Para mayores de 13', value: 'opcion1' },
      { label: 'Para mayores de 16', value: 'opcion2' },
      { label: 'Para mayores de 18', value: 'opcion3' },
    ]);

    const [itemsIdioma, setItemsIdioma] = useState([
        { label: 'Español', value: 'opcion1' },
        { label: 'Inglés', value: 'opcion2' },
        { label: 'Portugués', value: 'opcion3' },
        { label: 'Japonés', value: 'opcion4' },
        { label: 'Alemán', value: 'opcion5' },
    ]);

    const [itemsCopyright, setItemsCopyright] = useState([
      { label: 'Todos los derechos reservados', value: 'opcion1' },
      { label: 'Dominio público', value: 'opcion2' },
      { label: 'Atribución de Creative Commons (CC)', value: 'opcion3' },
      { label: 'Atribución de (CC) No Comercial', value: 'opcion4' },
      { label: 'Atribución de (CC) No Com. Sin Derivados', value: 'opcion5' },
      { label: 'Atribución de (CC) No Com. ShareAlike', value: 'opcion6' },
      { label: 'Atribución de (CC) ShareAlike', value: 'opcion7' },
      { label: 'Atribución de (CC) Sin Derivados', value: 'opcion8' },
    ]);

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={{marginVertical: 5}} onPress={() => navigation.navigate('Escribir Capitulo')}>
                <Text>{item.name}{item.value}</Text>
            </TouchableOpacity>
        </View>
    );

    const { goBackPreviousScreen } = useGoBackPreviousScreen()
    
    return (
        <View style={[styles.container, {marginVertical: 40}]}>
            <View style={{flexDirection: 'row', marginTop: '-2%'}}>
                <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                    <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10}} />
                </TouchableOpacity>
                <Text style={[styles.category, {alignSelf: 'center', width: 400, marginTop: '2%', marginLeft: '43.3%'}]}>Editar historia</Text>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.addImageBook}>
                        <Image style={styles.iconAddImageBook} source={ require('./../components/imgs/imgs-examples/create-book-icon.png')} />
                        <Text>Agregar portada</Text>
                    </TouchableOpacity>
        
                    <Text style={[styles.category, {marginVertical: 30, marginHorizontal: 96}]}>Detalles de la historia</Text>
        
                    <View style={styles.form}>
                        <Text style={{marginHorizontal: 30}}>Titulo</Text>
                        <TextInput
                            style={styles.inputDetail}
                            placeholder='Titulo'
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={{marginHorizontal: 30}}>Sipnosis</Text>
                        <TextInput 
                            style={[styles.inputDetail, {height: 150}]}
                            placeholder='Sipnosis'
                            multiline={true}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={{marginHorizontal: 30}}>Categorías</Text>
                        <TouchableOpacity>
                            <View style={styles.addCategoryButton}>
                                <Image source={ require('./../components/imgs/imgs-examples/create-book-icon.png')} style={{width: 20, height: 20, marginVertical: 5, marginHorizontal: 7}} />
                                <Text style={{marginVertical: 5}}>Agregar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                        <Text style={{marginHorizontal: 30}}>Etiquetas</Text>
                        <TouchableOpacity>
                            <View style={styles.addCategoryButton}>
                                <Image source={ require('./../components/imgs/imgs-examples/create-book-icon.png')} style={{width: 20, height: 20, marginVertical: 5, marginHorizontal: 7}} />
                                <Text style={{marginVertical: 5}}>Agregar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
        
                    <View style={[styles.form, {zIndex: 0}, openMenu === 'menu1' && styles.dropdownOpen]}>
                        <Text style={{marginHorizontal: 30}}>Audiencia</Text>
                        <View style={[styles.addCategoryButton, {width: 250}]}>
                            <DropDownPicker
                              open={openMenu === 'menu1'}
                              value={value1}
                              items={itemsAudiencia}
                              setOpen={() => setOpenMenu(openMenu === 'menu1' ? null : 'menu1')} // Cierra o abre el menú
                              setValue={setValue1}
                              setItems={setItemsAudiencia}
                              placeholder="Elegir audiencia"
                              dropDownContainerStyle={{zIndex: 9000}}
                            />
                        </View>
                    </View>
        
                    <View style={[styles.form, {marginVertical: 30}, openMenu === 'menu2' && styles.dropdownOpen]}>
                        <Text style={{marginHorizontal: 30}}>Idioma</Text>
                        <View style={[styles.addCategoryButton, {width: 250}]}>
                            <DropDownPicker
                              open={openMenu === 'menu2'}
                              value={value2}
                              items={itemsIdioma}
                              setOpen={() => setOpenMenu(openMenu === 'menu2' ? null : 'menu2')}
                              setValue={setValue2}
                              setItems={setItemsIdioma}
                              placeholder="Elegir idioma"
                              dropDownContainerStyle={{zIndex: 9000}}
                            />
                        </View>
                    </View>
        
                    <View style={[styles.form, {marginVertical: 30}, openMenu === 'menu3' && styles.dropdownOpen]}>
                        <Text style={{marginHorizontal: 30}}>Derechos de autor</Text>
                        <View style={[styles.addCategoryButton, {width: 250}]}>
                            <DropDownPicker
                              open={openMenu === 'menu3'}
                              value={value3}
                              items={itemsCopyright}
                              setOpen={() => setOpenMenu(openMenu === 'menu3' ? null : 'menu3')}
                              setValue={setValue3}
                              setItems={setItemsCopyright}
                              placeholder="Elige una opción"
                              dropDownContainerStyle={{zIndex: 9000}}
                            />
                        </View>
                    </View>
        
                    <View style={[styles.form, {marginVertical: 30}]}>
                        <Text style={{marginHorizontal: 30}}>Historia Madura</Text>
                        <View style={{flexDirection: 'row', marginVertical: 5}}>
                            <Checkbox
                                style={{marginHorizontal: 30}}
                                value={isChecked1}
                                onValueChange={setIsChecked1}
                                color={isChecked1 ? '#4630EB' : undefined}
                            />
                            <Text style={{marginHorizontal: -20}}>Activar historia madura</Text>
                        </View>
                        <Text style={{width: 500, marginHorizontal: 30}}>
                            Al seleccionar esta opción, adviertes a los lectores que tu historia incluye contenido 
                            sensible, como violencia, contenido sexual, sangre, entre otros.
                        </Text>
                    </View>
                    <View style={[styles.form, {marginVertical: 30, marginLeft: '-30%'}]}>
                        <View style={{flexDirection: 'row', marginVertical: 5}}>
                            <Checkbox
                                style={{marginHorizontal: 30}}
                                value={isChecked2}
                                onValueChange={setIsChecked2}
                                color={isChecked2 ? '#4630EB' : undefined}
                            />
                            <Text style={{marginHorizontal: -20}}>Historia concluida</Text>
                        </View>
                    </View>

                    <View style={[styles.form, {width: '50%'}]}>
                        <Text style={{marginHorizontal: 30, fontWeight: 'bold'}}>Tablón de capítulos</Text>
                        <View style={{borderColor: '#000', borderWidth: 1, marginHorizontal: 30}}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}

                            />
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonCreate} onPress={() => navigation.navigate('Crea una historia')}>
                            <Text style={{marginTop: 5, color: '#efefef', fontWeight: 'bold', fontSize: 18}}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

};

export default DetailsEditBook;