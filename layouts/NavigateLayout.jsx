import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        paddingHorizontal: 10,
        marginTop: 45,
        marginBottom: 20,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
    welcomeText: {
        fontSize: 25,
        fontFamily: 'fontSemiBold',
        marginLeft: 13,
    },
    profile: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 13,
        // position: 'absolute',
        // right: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 28,
        fontFamily: 'fontSemiBold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    redbutton: {
        width: 115,
        height: 115,
        borderRadius: '50%',
        backgroundColor: '#FF3030',
        alignSelf: 'center',
        marginBottom: 20,
    },
    greenbutton: {
        width: 115,
        height: 115,
        borderRadius: '50%',
        backgroundColor: '#00A700',
        alignSelf: 'center',
        marginBottom: 20,
    },
    yellowButton: {
        width: 115,
        height: 115,
        borderRadius: '50%',
        backgroundColor: '#FFFF13',
        alignSelf: 'center',
        marginBottom: 20,
    }
});

export default styles;