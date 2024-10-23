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

import { NavBar } from '../components/navbar/navbar';
import { styles } from '../components/styles/styles';
import { useGoBackPreviousScreen } from '../components/goBack/goBack';

const Notifications = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{borderBottomColor: "#dfdfdf", borderBottomWidth: 1, marginTop: '-2%'}}>
               <TouchableOpacity onPress={() => navigation.navigate('Pantalla Principal')}>
                 <Image style={styles.logo} source={ require('./../components/imgs/imgs-examples/lovell-logo-ver2.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.searchBar}>
                 <Text>🔎 Buscar historias, usuarios</Text>
               </TouchableOpacity>
               <View style={{flexDirection: 'row', marginTop: '-5%', marginLeft: '80%', marginVertical: 30}}>
                 <TouchableOpacity style={{marginLeft: '5%'}} onPress={() => navigation.navigate('Crear Historia')}>
                   <Text style={{fontSize: 23, textAlign: 'center', backgroundColor: '#41f0b5', width: 80, borderRadius: 5}}>Crear</Text>
                 </TouchableOpacity>
            
                 <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Biblioteca')}>
                   <Image
                     source={ require('./../components/imgs/nav-bar-icons/library.png')} 
                     style={{
                       width: 40,
                       height: 40,
                     }} 
                   />
                 </TouchableOpacity>
                    
                 <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Notificaciones')}>
                   <Image 
                     source={ require('./../components/imgs/imgs-examples/notifications-icon.png')}
                     style={{
                       width: 40,
                       height: 40,
                       alignSelf: 'flex-end',
                     }}
                   />
                 </TouchableOpacity>
                    
                 <TouchableOpacity style={{marginLeft: '5%', marginTop: '-0.7%'}} onPress={() => navigation.navigate('Perfil')}>
                   <Image 
                     source={ require('./../components/imgs/imgs-examples/profile.png')}
                     style={{
                       width: 40,
                       height: 40,
                       alignSelf: 'flex-end',
                     }} 
                   />
                 </TouchableOpacity>
               </View>
            </View>
            
            <ScrollView>
                <View style={{alignSelf: 'center'}}>
                    <Text style={[styles.category, {marginTop: 50, marginLeft: 10}]}>Notificaciones</Text>
                    <View style={[styles.contentNotifications, {backgroundColor: '#d8c9f5', width: 'auto'}]}>
                        <Text style={
                                [
                                    styles.dateNotifications, 
                                    {
                                        color: '#952d7f', 
                                        borderBottomColor: '#952d7f',
                                        borderBottomWidth: 1,
                                    }
                                ]
                            }
                        >Nuevos</Text>
                        <View>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 1</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 2</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 3</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentNotifications}>
                        <Text style={
                                [
                                    styles.dateNotifications, 
                                    { 
                                        width: 'auto',
                                        borderBottomColor: '#adadad',
                                        borderBottomWidth: 1
                                    }
                                ]
                            }
                        >Hoy</Text>
                        <View>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 4</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 5</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/anuncio.png')} style={[styles.iconNotification, {backgroundColor: '#51f574', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha hecho un nuevo <Text style={{fontWeight: 'bold'}}>Anuncio</Text>!
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Dale a tu cuerpo alegria Macarena que tu cuerpo es pa' darle alegria y cosa buena, dale a tu cuerpo alegria Macarena, hey Macarena 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/comentario.png')} style={[styles.iconNotification, {backgroundColor: '#f551be', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha dejado un comentario en <Text style={{fontWeight: 'bold'}}>Tu Libro 1</Text> en el capítulo <Text style={{fontWeight: 'bold'}}>Titulo del capítulo</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>El comentario con más likes es joto 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/me_gusta.png')} style={[styles.iconNotification, {backgroundColor: '#da9032', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        A <Text style={{fontWeight: 'bold'}}>usuario</Text> le ha gustado tu capítulo <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text> de <Text style={{fontWeight: 'bold'}}>Tu Libro 2</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/follower.png')} style={[styles.iconNotification, {backgroundColor: '#ee5e5e', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        Tienes un nuevo seguidor/a: <Text style={{fontWeight: 'bold'}}>usuario</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentNotifications}>
                        <Text style={
                                [
                                    styles.dateNotifications, 
                                    { 
                                        width: 'auto',
                                        borderBottomColor: '#adadad',
                                        borderBottomWidth: 1
                                    }
                                ]
                            }
                        >Hace 2 días</Text>
                        <View>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 4</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 5</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/anuncio.png')} style={[styles.iconNotification, {backgroundColor: '#51f574', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha hecho un nuevo <Text style={{fontWeight: 'bold'}}>Anuncio</Text>!
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Dale a tu cuerpo alegria Macarena que tu cuerpo es pa' darle alegria y cosa buena, dale a tu cuerpo alegria Macarena, hey Macarena 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/comentario.png')} style={[styles.iconNotification, {backgroundColor: '#f551be', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha dejado un comentario en <Text style={{fontWeight: 'bold'}}>Tu Libro 1</Text> en el capítulo <Text style={{fontWeight: 'bold'}}>Titulo del capítulo</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>El comentario con más likes es joto 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/me_gusta.png')} style={[styles.iconNotification, {backgroundColor: '#da9032', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        A <Text style={{fontWeight: 'bold'}}>usuario</Text> le ha gustado tu capítulo <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text> de <Text style={{fontWeight: 'bold'}}>Tu Libro 2</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/follower.png')} style={[styles.iconNotification, {backgroundColor: '#ee5e5e', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        Tienes un nuevo seguidor/a: <Text style={{fontWeight: 'bold'}}>usuario</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentNotifications}>
                        <Text style={
                                [
                                    styles.dateNotifications, 
                                    { 
                                        width: 'auto',
                                        borderBottomColor: '#adadad',
                                        borderBottomWidth: 1
                                    }
                                ]
                            }
                        >Hace una semana</Text>
                        <View>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 4</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 5</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/anuncio.png')} style={[styles.iconNotification, {backgroundColor: '#51f574', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha hecho un nuevo <Text style={{fontWeight: 'bold'}}>Anuncio</Text>!
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Dale a tu cuerpo alegria Macarena que tu cuerpo es pa' darle alegria y cosa buena, dale a tu cuerpo alegria Macarena, hey Macarena 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/comentario.png')} style={[styles.iconNotification, {backgroundColor: '#f551be', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha dejado un comentario en <Text style={{fontWeight: 'bold'}}>Tu Libro 1</Text> en el capítulo <Text style={{fontWeight: 'bold'}}>Titulo del capítulo</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>El comentario con más likes es joto 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/me_gusta.png')} style={[styles.iconNotification, {backgroundColor: '#da9032', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        A <Text style={{fontWeight: 'bold'}}>usuario</Text> le ha gustado tu capítulo <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text> de <Text style={{fontWeight: 'bold'}}>Tu Libro 2</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/follower.png')} style={[styles.iconNotification, {backgroundColor: '#ee5e5e', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        Tienes un nuevo seguidor/a: <Text style={{fontWeight: 'bold'}}>usuario</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentNotifications}>
                        <Text style={
                                [
                                    styles.dateNotifications, 
                                    { 
                                        width: 'auto',
                                        borderBottomColor: '#adadad',
                                        borderBottomWidth: 1
                                    }
                                ]
                            }
                        >25/09/2024</Text>
                        <View>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 4</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/bookNotification.png')} style={[styles.iconNotification, {backgroundColor: '#51c8f5', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha publicado un nuevo capítulo de <Text style={{fontWeight: 'bold'}}>Titulo de Libro 5</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Nuevo capítulo: <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/anuncio.png')} style={[styles.iconNotification, {backgroundColor: '#51f574', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha hecho un nuevo <Text style={{fontWeight: 'bold'}}>Anuncio</Text>!
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>Dale a tu cuerpo alegria Macarena que tu cuerpo es pa' darle alegria y cosa buena, dale a tu cuerpo alegria Macarena, hey Macarena 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/comentario.png')} style={[styles.iconNotification, {backgroundColor: '#f551be', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        <Text style={{fontWeight: 'bold'}}>usuario</Text> ha dejado un comentario en <Text style={{fontWeight: 'bold'}}>Tu Libro 1</Text> en el capítulo <Text style={{fontWeight: 'bold'}}>Titulo del capítulo</Text>.
                                    </Text>
                                </View>
                                <Text style={styles.contentNotification}>El comentario con más likes es joto 🗣🔥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/me_gusta.png')} style={[styles.iconNotification, {backgroundColor: '#da9032', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        A <Text style={{fontWeight: 'bold'}}>usuario</Text> le ha gustado tu capítulo <Text style={{fontWeight: 'bold'}}>Titulo de capítulo</Text> de <Text style={{fontWeight: 'bold'}}>Tu Libro 2</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.limitNotification}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={ require('./../components/imgs/imgs-examples/profile.png')} style={styles.iconProfile} />
                                    <Image source={ require('./../components/imgs/imgs-examples/follower.png')} style={[styles.iconNotification, {backgroundColor: '#ee5e5e', borderRadius: 7}]} />
                                    <Text style={styles.notification}>
                                        Tienes un nuevo seguidor/a: <Text style={{fontWeight: 'bold'}}>usuario</Text>!
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
};

export default Notifications;