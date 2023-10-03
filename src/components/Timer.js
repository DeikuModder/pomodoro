import { StyleSheet, Text, View } from "react-native";

export default function Timer({time}){
    const formatedTime = `${Math.floor(time / 60)
                                .toString()
                                .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formatedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .25,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 20
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2e2e2e'
    }
})