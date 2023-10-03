import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Audio } from 'expo-av';
 
export default function StartButton({time, setTime, currentTab}){
    const [isActive, setActive] = useState(false)
    
    async function playSound(){
        const { sound } = await Audio.Sound.createAsync(
            require('./compAssets/clickDone.mp3')
        )

        await sound.playAsync();
    }

    useEffect(() => {
        let interval = null;

        if (isActive){
            interval = setInterval(() => {
                setTime(time - 1)
            }, 1000)

        } else {
            clearInterval(interval)
        }

        if (time === 0){
            playSound();
            setActive(false);
            switch (currentTab) {
                case 0:
                    setTime(25 * 60)
                    break;
                case 1:
                    setTime(5 * 60)
                    break;
                default:
                    setTime(15 * 60)
                    break;
            }

        }

        return () => clearInterval(interval)

    }, [isActive, time])

    function handleStartStop(){
        setActive(!isActive);

        if (!isActive){
            playSound();
        }
    }

    return (
        <View style={{width: 130, position: 'relative', left: '30%', top: 20}}>
            <TouchableOpacity onPress={handleStartStop} style={styles.button}>
                <Text style={{fontWeight: 'bold', color: "white", fontSize: 30}}>{isActive ? 'STOP' : 'START'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#29293b',
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
    }
})