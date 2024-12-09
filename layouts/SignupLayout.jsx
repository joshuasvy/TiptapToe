import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15
    },
    logo: {
        height: 180,
        width: 180,
        marginVertical: 45,
        alignSelf: 'center'
    },
    signupText: {
        fontSize: 33,
        fontFamily: 'fontBold',
    },
    tipTapTone: {
        fontSize: 33,
        fontFamily: 'fontBold',
        color: '#ACE8E6',
        marginTop: -8,
    },
    inputContent: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        paddingHorizontal: 13,
        paddingVertical: 3,
        marginBottom: 8,
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
    input: {
        width: '90%',
        fontSize: 14,
        fontFamily: 'fontRegular',
        backgroundColor: '#ffffff',
    },
    hideAndShowPassword: {
        width: 28,
        height: 28,
    },
    signupBtn: {
        width: '85%',
        backgroundColor: '#D2FBD4',
        flexDirection: 'row',
        alignSelf: 'center',
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