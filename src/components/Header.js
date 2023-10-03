import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Header({ currentTab, setCurrentTab, setTime }){
    const tabOptions = ['Pomodoro', 'Short Break', 'Long Break']

    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTab(index);
        setTime(newTime * 60); 
    }

    return (
        <View style={{flexDirection: 'row'}}>
            {tabOptions.map((tab, index) => (
                <TouchableOpacity key={index} style={[styles.tabStyles, currentTab !== index && {borderColor: 'transparent'}]} 
                    onPress={() => {handlePress(index)}}>
                    <Text style={{fontWeight: 'bold'}}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    tabStyles: {
        borderWidth: 3,
        padding: 5,
        alignItems: 'center',
        width: "33.33%",
        marginVertical: 20,
        borderColor: 'white',
        borderRadius: 10
    }
})