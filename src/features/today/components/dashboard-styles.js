import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    modalContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding:10,
        
      },
    triangle: {
        position: 'absolute',
        left: 25,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderRightColor: 'transparent'
    },
    topLeft: {
        top: -20,
        borderBottomWidth: 20,
        borderBottomColor: 'white',
        borderRightColor: 'transparent'
    },
    triangleRightTop: {
        position: 'absolute',
        top: -20,
        left: 270,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 30,
        borderLeftColor: 'transparent',
        borderBottomWidth: 20,
        borderBottomColor: 'white',
        borderRightColor: 'transparent',
    },
    bottom: {
        bottom: -20,
        borderTopWidth: 20,
        borderTopColor: 'white'
    },
    bubble: {
        position: 'relative',
        marginTop: 250, 
        marginLeft: 16,
        marginRight: 16
      },
    buttonsContanier: {
        justifyContent: 'center',
        flexDirection: 'row', 
        width: 200,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 130,
      margin: 4,
      padding: 11,
      borderRadius: 10,
      backgroundColor: '#16a28b',
    },
    buttons: {
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
        textAlign: 'center', 
        color: 'white',
    },
    previousButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 130,
      margin: 4,
      padding: 8,
      borderRadius: 10,
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#16a28b',
      backgroundColor: 'white',
    },
    previousButtons: {
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
        textAlign: 'center', 
        color: '#16a28b',
    },
    modalContent: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        backgroundColor: 'white',
        padding: 10,
        elevation: 5
    },
    messageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        left: 315,        
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20
    },
    menuContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        left: 5,        
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20
    }
  });