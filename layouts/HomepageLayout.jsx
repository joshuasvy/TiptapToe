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
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingRight: 40,
        marginTop: 45,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 25,
        fontFamily: 'fontSemiBold',
    },
    profile: {
        width: 75,
        height: 75,
        borderRadius: 50,
        position: 'absolute',
        right: 10,
    },
    logo: {
        width: 350,
        height: 350,
        marginBottom: 40,
        alignSelf: 'center',
    },
    navigateBtn: {
        width: '55%',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 15,
        marginBottom: 28,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default styles;