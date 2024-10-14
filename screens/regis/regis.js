import React, { useState, useEffect, useContext } from 'react';

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

import { useAuth, AuthProvider } from '../components/firebase/controllers/authContext';
import { auth} from './../components/firebase/firebase'
import { styles } from './../components/styles/styles';

const Regis = ({ router }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { goBackPreviousScreen } = useGoBackPreviousScreen();

    //const { login, loginWithGoogle } = useAuth();

    //const navigation = useNavigation();

    // Función para manejar el inicio de sesión
    const handleRegis = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            router.push("./index", { relativeToDirectory: true })
        })
        .catch(error => alert(error.message))
    }

    // Función para manejar el inicio de sesión con Google
    // const handleGoogle = async () => {
    //     try {
    //         const user = await loginWithGoogle();
    //         console.log('Usuario:', user);
    //     } catch (error) {
    //         console.log('Error al iniciar sesión', error.message);
    //     }
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBackPreviousScreen} style={{marginTop: 30}}>
                <Image source={ require('./../components/imgs/imgs-examples/backButton.png')} style={{width: 30, height: 30, marginLeft: 10, marginVertical: 5}} />
            </TouchableOpacity>            
            <ScrollView
            >
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 120}}>
                    <View style={[{alignItems: 'center', padding: 3}, styles.styleForm]}>
                        <View>
                            <Text style={styles.titleApp}>Lovell</Text>
                        </View>
                        <Text style={{fontSize: 18}}>Registro</Text>
                        <TextInput 
                            placeholder="Correo electrónico"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                        />
                        <TextInput 
                            placeholder="Contraseña"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            keyboardType="password"
                            autoCapitalize="none"
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.buttonLogin} onPress={handleRegis}>
                            <Text style={ {fontSize: 14} }>Registrarse</Text>
                        </TouchableOpacity>
                        {/*<Text style={ {marginVertical: 18,} }>o</Text>
                        <TouchableOpacity style={[ styles.buttonStyle, {backgroundColor: '#dfdfdf'} ]} onPress={handleGoogle}>
                            <Image style={styles.logoAuth} source={require('./../components/imgs/imgs-auth/google.png')} />
                            <Text style={ {fontSize: 14, marginHorizontal: 3} }>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.buttonStyle, {backgroundColor: '#395899'} ]}>
                            <Image style={styles.logoAuth} source={require('./../components/imgs/imgs-auth/facebook.png')} />
                            <Text style={ {fontSize: 14, marginHorizontal: 3, color: '#fff'} }>Facebook</Text>
                        </TouchableOpacity> */}
                    </View>
                    <View>
                        <Image style={[styles.logoLogin]} source={require('./../components/imgs/imgs-examples/lovell-logo-ver2.png')} />
                    </View>
                    <View style={{zIndex: -9}}>
                        <View 
                            style={{
                                width: 500,
                                height: 500,
                                backgroundColor: '#3cb7cf',
                                borderTopLeftRadius: 350,
                                borderTopRightRadius: 350,
                                borderBottomLeftRadius: 350,
                                marginLeft: -350,
                                marginTop: 147
                            }}
                        />
                        <View
                            style={{
                                width: 300,
                                height: 300,
                                backgroundColor: '#62decd',
                                borderTopLeftRadius: 250,
                                borderTopRightRadius: 250,
                                borderBottomLeftRadius: 250,
                                marginTop: -300,
                                marginLeft: -140,
                            }}
                        />
                        <View
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: '#aef4ba',
                                borderTopLeftRadius: 250,
                                borderTopRightRadius: 250,
                                borderBottomLeftRadius: 250,
                                marginTop: -200,
                                marginLeft: -50,
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Regis;