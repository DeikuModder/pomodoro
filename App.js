import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList } from 'react-native';
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
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: Platform.OS === 'android' && 40}}>

        <Text style={[styles.texts, {position: 'relative', 
                                     left: '17%', 
                                     backgroundColor: '#29293b',
                                     color: 'white',
                                     width: 220,
                                     textAlign: 'center',
                                     padding: 5,
                                     borderRadius: 20}]}>
          POMODORO
        </Text>

        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} setTime={setTime}/>

        <Timer time={time}/>

        <StartButton time={time} setTime={setTime} currentTab={currentTab}/>

        <View style={styles.pomo}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            HOW IT WORKS
          </Text>
          <Text style={styles.centerTxt}>
            A pomodoro helps you to be more productive, you'll follow these rules:
          </Text>
  
          <Text style={{fontStyle: 'italic', paddingTop: 10}}>
            - 25 min where you need to do your task, no stops allowed, if you wanna rest, you'll have to finish your 25 min first.
          </Text>

          <Text style={{fontStyle: 'italic'}}>
            - Then you can choose between taking a short break of 5 min, or a long break of 15 min
          </Text>

          <Text style={[styles.centerTxt, {paddingVertical: 10}]}>
            If you follow these rules, you will finish any task you propose at a good pace, good luck!
          </Text>
        </View>

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
  },
  pomo: {
    backgroundColor: 'white',
    flex: .6,
    width: 250,
    position: 'relative',
    top: 40,
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    opacity: .8,
  
  },
  centerTxt: {
    textAlign: 'center'
  }
});
