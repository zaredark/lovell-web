  import "react-native-url-polyfill/auto"; // IMPORTANTE SI HAY BARDO CON EL URL.protocol !!!!!!!!!!!
  import { registerRootComponent } from 'expo'; // IMPORTANTE SI HAY BARDO CON EL "main" !!!!!!!!!!!
  import { StatusBar } from 'expo-status-bar';
  import React, { useEffect, useState } from 'react';
  import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
  import axios from 'axios';
  //import App from './App';

  // Librerias de navegacion

  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";

  //// Conexion Pantallas
  //
  import Main from './screens/main/main';
  import biblioteca from './screens/library/library';
  import Login from './screens/login/login';
  import Create from './screens/create/create';
  import CreateBook from "./screens/createBook/createBook";
  import DetailsEditBook from './screens/detailsEditBook/detailsEditBook'
  import WriteCap from "./screens/writeCap/writeCap";
  import Read from "./screens/readCap/readCap";
  import Profile from "./screens/profile/profile";
  import Notifications from "./screens/notifications/notifications";
  import DetailsBook from "./screens/detailsBook/detailsBook";
  import Regis from "./screens/regis/regis";
  import Search from "./screens/search/search";

  import { DisableContent } from "./screens/components-for-screens/disableScreenContent/disableScreenContent";
  //
  // Constante STACK
  const Stack = createNativeStackNavigator()

  function Mystack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Iniciar Sesion | Lovell" component={Login} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Pantalla Principal" component={Main} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Biblioteca" component={biblioteca} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Crea una historia" component={Create} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Crear Historia" component={CreateBook} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Detalles Editar Historia" component={DetailsEditBook} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Escribir Capitulo" component={WriteCap} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Perfil" component={Profile} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Notificaciones" component={Notifications} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Detalles" component={DetailsBook} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Registro" component={Regis} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Leer" component={Read} options={{ headerShown: false, animationEnabled: false}}/>
        <Stack.Screen name="Buscar" component={Search} options={{ headerShown: false, animationEnabled: false}}/>
      </Stack.Navigator>
    )
  }

  registerRootComponent(App); // CUANDO HAY BARDO EN EL "main", meter este cachivache !!!!!!!!!

  export default function App() {
    return (
      <NavigationContainer>
        <Mystack />
      </NavigationContainer>
    );
  }
