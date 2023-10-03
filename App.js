import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import StartButton from './src/components/StartButton';

export default function App() {
  const colors = [/*red*/"#fc3d3a", /*yellow*/'#fcb83a', /*green*/'#5be37b']

  const [time, setTime] = useState(25 * 60);
  const [currentTab, setCurrentTab] =  useState('POMO' | 'SHORT' | 'LONG')


  return (
    // safeareaview solo funciona en ios;
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTab]}]}>
      {/* asi que para que se vea bien en android, utilizamos Platform para que use el padding solo si esta en android; */}
      <View style={{flex: 1, paddingHorizontal: 20,paddingTop: Platform.OS === 'android' && 30}}>

        <Text style={styles.texts}>Pomodoro</Text>

        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} setTime={setTime}/>

        <Timer time={time}/>

        <StartButton time={time} setTime={setTime} currentTab={currentTab}/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texts: {
    fontSize: 35,
    fontWeight: "bold"
  }
});
