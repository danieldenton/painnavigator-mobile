import { StyleSheet } from "react-native";
import { isAndroid, isIPad } from "../../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
      },
    modalContainer: {
        position: 'relative',
        justifyContent: 'center',   
        height: 200,
        marginLeft: isAndroid ? 20 : 16,
        marginRight: isAndroid ? 20 : 16,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: isAndroid ? 20 : 10,
        
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
        left: isIPad ? 700 : 270,
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
        marginRight: 16,
      },
    modalContent: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "Inter_500Medium",
        backgroundColor: 'white',
        padding: 10,
    },
    messageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isAndroid ? 3 : isIPad ? 20 : 50,
        left: isAndroid ? 298 : isIPad ? 740 : 315,        
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20
    },
    menuContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isAndroid ? 3 : isIPad ? 20 : 50,
        left: 5,        
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20
    }
  });