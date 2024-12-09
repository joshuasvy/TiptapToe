import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15
    },
    props: {
        backgroundColor: '#D2FBD4',
        height: 190,
        width: 190,
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 1,
        right: -65,
        marginTop: 25,
    },
    props2: {
        backgroundColor: '#D2FBD4',
        height: 65,
        width: 65,
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 1,
        right: 105,
        marginTop: 180,
    },
    headerContainer: {
        marginVertical: 48,
    },
    welcomeText: {
        fontSize: 26,
        fontFamily: 'fontBold',
    },
    welcomeSubText: {
        fontSize: 16,
        fontFamily: 'fontRegular',
    },
    signinText: {
        fontSize: 32,
        fontFamily: 'fontBold',
    },
    inputContainer: {
        paddingHorizontal: 13,
        marginTop: 25,
    },
    emailInputContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        paddingHorizontal: 13,
        paddingVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputEmail: {
        width: '100%',
        fontSize: 14,
        fontFamily: 'fontRegular',
        backgroundColor: '#ffffff',
    },
    passwordInputContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        paddingHorizontal: 13,
        paddingVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputPassword: {
        width: '90%',
        fontSize: 14,
        fontFamily: 'fontRegular',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hideAndShowPassword: {
        width: 28,
        height: 28,
    },
    signinBtn: {
        backgroundColor: '#D2FBD4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        marginVertical: 30,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
    },
})

export default styles;