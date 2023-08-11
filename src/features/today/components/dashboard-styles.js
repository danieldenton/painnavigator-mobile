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
        height: 150,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
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
    buttonContanier: {
        justifyContent: 'center',
        flexDirection: 'row', 
        width: 200,
    },
    buttons: {
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        textAlign: 'center',
        width: 100,
        margin: 2,
        padding: 3,
        backgroundColor: '#16a28b',
        color: 'white',
        borderRadius: 10
    },
    modalContent: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        backgroundColor: 'white',
        padding: 20,
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