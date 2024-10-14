import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

// const getDimensionX = () => { // funcion para calcular el eje horizontal de la pantalla del cel
//   if (width === BASE_WIDTH) {
//     return width
//   } else {
//     const promWidth = width / BASE_WIDTH;
//     const newWidth = BASE_WIDTH * promWidth;
//     return newWidth
//   }
// }

// console.log(width, 'x', height);

// const getDimensionY = () => { // funcion para calcular el eje vertical de la pantalla del cel
//   if (height === BASE_HEIGHT) {
//     return height
//   } else {
//     const promHeight = height / BASE_HEIGHT;
//     const newHeight = BASE_HEIGHT * promHeight;
//     return newHeight
//   }
// }

export const styles = StyleSheet.create({
    container: {
        flex: 1, // El contenedor ocupa todo el espacio disponible
        flexDirection: 'column', // Organiza los elementos en columnas (verticalmente)
        justifyContent: 'space-between', // Distribuye el espacio entre los elementos
        alignItems: 'left', // Alinea los elementos en el centro verticalmente
        width: width, 
        height: height,
        padding: 2
    },
    standBooks: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 40,
      padding: 3,
      //backgroundColor: '#dfdfdf',
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 40,
      marginHorizontal: 5
    },
    category: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    icon: {
      width: '20%',
      height: '20%',
    },
    searchBar: {
      justifyContent: 'center',
      backgroundColor: '#cfcfcf',
      marginTop: 70,
      marginLeft: 100,
      padding: 9,
      borderRadius: 20,
      width: 530,
      marginHorizontal: 57,
      position: 'absolute'
    },
    bookPhoto: {
      width: 152,
      height: 210,
      marginHorizontal: 5,
      marginVertical: 10,
    },
    titleBook: {
      marginHorizontal: 10,
      fontWeight: 'bold',
    },
    iconCaps: {
      width: 22,
      height: 22,
      marginTop: 1,
      marginHorizontal: 10,
    },
    status: {
      marginHorizontal: 14,
      backgroundColor: '#34e6a8',
      width: 98,
      textAlign: 'center',
      borderRadius: 10,
    },
    
    // Nav-bar
    nav: {
      flexDirection: 'row',
      marginLeft: 3
    },
    iconNavBar: {
      width: 30,
      height: 30,
      marginHorizontal: 14.5,
      marginVertical: 5,
    },
    btnNavBar: {
      alignItems: 'center',
      marginHorizontal: 3,
    },
    nameBtn: {
      fontSize: 11.3
    },
    styleForm: {
      backgroundColor: "rgba(16, 232, 229, 0.1)",
      borderRadius: 10,
      borderColor: "#000",
      borderWidth: 1
    },
    buttonText:{
      fontSize: 23,
      textAlign: 'center',
      backgroundColor: '#41f0b5',
      width: 80,
      borderRadius: 5
    },

    // Styles elements for Library.js
    options: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginVertical: -2
    },
    btnOption: {
      marginHorizontal: 6.5
    },
    standSection: {
      flexDirection: 'row',
    },
    selectedOption:{
      backgroundColor: '#68badf',
      borderRadius: 10,
      height: 5,
    },
    createStand: {
      backgroundColor: '#dfdfdf',
      width: 300,
      height: 120,
      marginTop: '6%',
      marginHorizontal: 30,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
    archived: {
      flexDirection: 'row'
    },
    titleBookLibraryArchived: {
      fontSize: 20,
      marginVertical: 10,
      marginHorizontal: 10
    },

    // Stands Biblioteca
    flexLibrary: {
      flex: 3,
      flexDirection: 'row'
    },
    standBooks: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 30,
      padding: 3,
    },
    titleBookLibrary: {
      marginHorizontal: 30,
    },
    photoBookLibrary: {
      width: 152,
      height: 210,
      backgroundColor: '#cfcfcf',
      marginHorizontal: 2,
      marginVertical: 10,  
    },
    flexColumn: {
      flexDirection: 'row',
    },

    // Login.js
    logoLogin: {
      width: 500,
      height: 500,
      alignSelf: 'center',
      marginLeft: 300,
      marginTop: 20
    },
    titleApp: {
        fontSize: 50,
        marginTop: -10,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    presentation: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 30,
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 50,
    },
    logoAuth: {
        width: 30,
        height: 30,
    },
    buttonStyle: {
        flexDirection: 'row',
        width: 140,
        height: 40,
        justifyContent: 'center',
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 15,
    },
    input: {
      width: 300,
      height: 50,
      borderColor: '#000',
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 10
    },
    buttonLogin: {
      backgroundColor: '#dfdfdf', 
      borderRadius: 15, 
      alignItems: 'center',
      justifyContent: 'center',
      width: 140,
      height: 40,
      marginVertical: 18,
    },

    // NavBar styles
    nav: {
      flexDirection: 'row',
    },
    iconNavBar: {
      width: 33,
      height: 33,
      marginHorizontal: 14.5,
      marginVertical: 5,
    },
    menuButton: {
      padding: 15,
      backgroundColor: '#048bfc',
      borderRadius: 8,
    },
    menuButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    menuOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      width: 250,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    menuPosition: {
      alignSelf: 'flex-end',
      position: 'absolute',
      top: '40%',
    },
    nameBtn: {
      fontSize: 18,
      alignSelf: 'flex-end'
    },

    // CreateUI
    show: {
      zIndex: 999
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      marginVertical: -height,
    },
    interface: {
      width: '100%',
      height: 200, // Altura de la interfaz
      backgroundColor: 'white',
      justifyContent: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginVertical: height * 1.1 
    },
    buttonUI: {
      flexDirection: 'row',
      marginHorizontal: 15,
      marginVertical: 10,
    },
    iconUI: {
      width: 40,
      height: 40,
    },
    marginImgText: {
      marginHorizontal: 6
    },
    textSizeUI: {
      fontSize: 14,
      marginVertical: 10
    },

    // createBook styles
    addImageBook: {
      width: 152,
      height: 210,
      backgroundColor: '#dfdfdf',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 100,
      marginVertical: 10
    },
    iconAddImageBook: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    inputDetail: {
      marginVertical: 10,
      marginHorizontal: 30,
      borderColor: 'gray',
      width: 600,
      borderWidth: 1,
      padding: 5,
      textAlignVertical: 'top'
    },
    addCategoryButton: {
      width: 100,
      height: 30,
      backgroundColor: '#dfdfdf',
      marginHorizontal: 30,
      flexDirection: 'row',
      borderRadius: 10,
      marginVertical: 5
    },
    form: {
      marginVertical: 4
    },

    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    dropdown: {
      backgroundColor: '#ddd',
      borderRadius: 20,
      paddingHorizontal: 10,
      height: 40,
    },
    dropdownContainer: {
      borderRadius: 20
    },
    dropdownOpen: {
      zIndex: 5000
    },
    buttonCreate: {
      alignItems: 'center',
      marginHorizontal: 120,
      backgroundColor: '#519fca',
      width: 100,
      height: 40,
      borderRadius: 10
    },

    // navTools.js
    iconNavTools: {
      width: 30,
      height: 30
    },
    buttonNavTools: {
      flexDirection: 'column',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    size: {
    },

    // createSheet.js
    sheetDefault: {
      backgroundColor: '#dfdfdf',
      width: width - 50,
      height: height - 160,
      alignSelf: 'center'
    },
    
    richText: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      marginVertical: 10,
    },

    /* Word Component */
    /* Estilos HTML */
    /* styles for html tags */
    a: {
      fontWeight: "bold",
      color: "purple",
    },
    div: {
      fontFamily: "monospace",
    },
    p: {
      fontSize: 30,
    },
    /*******************************/
    containerRTD: {
      flex: 1,
      marginTop: -370,
    },
    editor: {
      backgroundColor: "black",

    },
    rich: {
      minHeight: 250,
      flex: 1,
    },
    richBar: {
      height: 50,
    },
    text: {
      fontWeight: "bold",
      fontSize: 20,
    },
    tib: {
      textAlign: "center",
      color: "#515156",
    },

    // profile.js
    pfp: {
      width: 250,
      height: 250,
      borderRadius: 140,
      marginTop: '-60%',
      marginLeft: '3%',
      borderColor: '#666969',
      borderWidth: 3
    },
    username: {
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 26,
      marginLeft: 20
    },
    nickname: {
      color: '#696969',
      alignSelf: 'center',
      fontSize: 13,
      marginLeft: 20
    },
    BFF: {
      marginLeft: 33,
      marginTop: 30,
      marginHorizontal: 5,
      fontSize: 18,
      fontWeight: 'bold',
    },
    dataBFF: {
      fontSize: 20,
      marginLeft: 53,
      marginHorizontal: 40
    },
    bio: {
      width: 750,
      height: 300,
      alignSelf: 'center',
      marginTop: 30,
      borderColor: '#000',
      borderWidth: 1
    },

    // Notificationes.js
    contentNotifications: {
      marginTop: 50,
    },
    dateNotifications: {
      fontWeight: 'bold',
      fontSize: 14
    },
    iconProfile: {
      width: 60,
      height: 60,
      marginTop: 20,
      marginLeft: 5,
      borderRadius: 30,
      borderColor: '#666666',
      borderWidth: 3,
      tintColor: '#666666'
    },
    iconNotification: {
      width: 25,
      height: 25,
      marginLeft: -23,
      marginTop: 20,
    },
    contentNotification: {
      marginTop: 10,
      marginLeft: 10,
      color:'#5f5f5f'
    },
    limitNotification: {
      flexDirection: 'colum',
      borderBottomColor: '#dfdfdf',
      borderBottomWidth: 1,
      height: 150
    },
    notification: { 
      marginLeft: 10, 
      marginTop: 20
    },

    // DetailsBook.js
    stat: {
      marginLeft: 26,
      fontSize: 15
    },
    categoryDetails: {
      width: 'auto',
      height: 30,
      backgroundColor: '#dfdfdf',
      marginLeft: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    categoryText: {
      alignSelf: 'center',
      marginTop: 4
    },

    // readCap.js
    cover: {
      height: 270,
      width: 370,
      alignSelf: 'center'
    },
    ambient: {
      flexDirection: 'column',
      alignContent: 'space-between'
    }
})