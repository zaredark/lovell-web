import { useNavigation } from "@react-navigation/native";

const useNavigationAvoid = () => {
    const navigation = useNavigation();

    const redictLibrary = () => {
        navigation.navigate("Biblioteca");
    }
    
    const redictNotifications = () => {
        navigation.navigate("Notificaciones");
    }
    
    const redictProfile = () => {
        navigation.navigate("Perfil");
    }
    
    const redictCreate = () => {
        navigation.navigate("Crea una historia");
    }

    return { redictLibrary, redictNotifications, redictProfile, redictCreate }
}

export { useNavigationAvoid }