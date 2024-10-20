import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
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
  ActivityIndicator
} from 'react-native';

import { NavBar } from '../components/navbar/navbar';
import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const Profile = () => {
    const { goBackPreviousScreen } = useGoBackPreviousScreen();

    const [usuarios, setUsuarios] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get("https://lovell-web.onrender.com/users");
            setUsuarios(response.data); // Guardar usuarios en el estado
        } catch (err) {
            console.error("Network error:", err);
            setError("Error al obtener los datos.");
        } finally {
            setLoading(false); // Detener el indicador de carga
        }
    };

    useEffect(() => {
        fetchUsuarios(); // Llamada inicial para obtener los datos
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                    <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
                </TouchableOpacity>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    // Evaluar si hay al menos un usuario antes de intentar acceder a él
    const usuario = usuarios.length > 0 ? usuarios[0] : {};


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
            </TouchableOpacity>
            <ScrollView>
                <Image 
                    source={ require('./../components/imgs/imgs-examples/banner.jpg')}
                    style={{
                        width: 'auto',
                    }}
                />
                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                    <Image 
                        source={ require('./../components/imgs/imgs-examples/inge1.jpg')}
                        style={styles.pfp}
                    />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.username}>{usuario.nickname}</Text>
                        <Text style={styles.nickname}>@{usuario.username}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.BFF}>Libros</Text>
                    <Text style={styles.BFF}>Seguidores</Text>
                    <Text style={styles.BFF}>Siguiendo</Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.dataBFF}>5</Text>
                    <Text style={styles.dataBFF}>22</Text>
                    <Text style={styles.dataBFF}>143</Text>
                </View>
                
                <View style={styles.bio}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', borderBottomColor: '#000', borderBottomWidth: 1, textAlign: 'center'}}>Biografía</Text>
                    <Text style={{marginTop: 10, marginLeft: 5, fontSize: 17}}>
                        {usuario.bio}
                        {/* Mecha Mecha
                        Todo lo que hice en esta vida para estar con ella 🗣🔥 */}
                    </Text>
                </View>

                <View style={{alignSelf: 'center', flexDirection: 'column'}}>
                    <View>
                        <Text stlye={{fontWeight: 'bold', fontSize: 20}}>Siguiendo</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image 
                            source={ require('./../components/imgs/imgs-examples/ojocibernetico.png')}
                            style={[styles.pfp, {width: 100, height: 100, marginTop: '0%'}]}
                        />
                        <Image 
                            source={ require('./../components/imgs/imgs-examples/yaqueProfile.png')}
                            style={[styles.pfp, {width: 100, height: 100, marginTop: '0%'}]}
                        />
                    </View>
                </View>
                
                <View style={[styles.standBooks, {borderColor: '#000', borderWidth: 1, width: 750, alignSelf: 'center'}]}>
                  <Text style={[styles.category, {borderBottomColor: '#000', borderBottomWidth: 1,}]}>Historias</Text>
                  <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} 
                    style={{flexDirection: 'row'}}
                  >
                    <TouchableOpacity>
                      <Image style={styles.bookPhoto} source={ require('./../components/imgs/imgs-examples/banner.jpg') } />
                    </TouchableOpacity>
                    <Image style={styles.bookPhoto} source={ require('./../components/imgs/bnha.png') } />
                    <Image style={styles.bookPhoto} source={ require('./../components/imgs/fnaf.png') } />
                    <Image style={styles.bookPhoto} source={ require('./../components/imgs/unicorniovolador.png') } />
                  </ScrollView>
                        
                  <View>
                      <Text style={styles.titleBook}>Titulo 1 - Titulo de Prueba</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.iconCaps} source={ require('./../components/imgs/caps.png') } />
                        <Text style={{marginHorizontal: 1}}>11 partes</Text>
                        <Text style={styles.status}>Completo</Text>
                      </View>
                        
                      <Text style={{marginHorizontal: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, qui
                      </Text>
                  </View>
                        
                </View>
            </ScrollView>
        </View>
    )
};

export default Profile;
