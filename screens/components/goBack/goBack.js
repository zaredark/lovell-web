import { useNavigation } from "@react-navigation/native";
const useGoBackPreviousScreen = () => {
    const navigation = useNavigation();
    
    const goBackPreviousScreen = () => {
        navigation.goBack(); // Esto retrocede a la pantalla anterior
    };

    return { goBackPreviousScreen };
};

export { useGoBackPreviousScreen };