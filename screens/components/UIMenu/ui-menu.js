import React, { useContext, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  SafeAreaView,
  //StatusBar,
  FlatList, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image, 
  ScrollView,
  TextInput,
} from 'react-native';

import { styles } from '../styles/styles';

const UiMenu = () => {
    return (
      <View style={styles.menuOverlay}>
        <View style={styles.menuContainer}>

        </View>
      </View>
    );
  };

export { UiMenu };