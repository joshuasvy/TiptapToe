import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2FBD4',
        paddingHorizontal: 15
    },
    welcomeText: {
        fontSize: 40,
        fontFamily: 'fontBold',
        alignSelf: 'center',
        marginVertical: 65,
    },
    subText: {
        fontSize: 16,
        fontFamily: 'fontRegular',
        textAlign: 'justify',
        lineHeight: 25,
        alignSelf: 'center',
        marginVertical: 20,
        paddingHorizontal: 8,
    },
    getStartedBtn: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 70,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
})

export default styles;