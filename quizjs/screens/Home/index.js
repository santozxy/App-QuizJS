import { View, Text,SafeAreaView, StyleSheet,TouchableOpacity,Image,Platform,Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AnimationJS from './animation'
import {styles} from './styles'

export default function Home({navigation}){
  return (
    <SafeAreaView style={styles.container}>
      <View style = {{flexDirection:'row'}}>
        <Text style={styles.title1}> Quiz</Text>
        <Text style={styles.title2}>JS </Text>
      </View>

    {Platform.OS === 'web'? 
    <View style = {{marginTop:20}}>
      <Image source = {require('../../assets/logo-js.png')} style = {{width:200,height:200}}/>
    </View>
    : 
     <View style = {{marginTop:20}}>
        <AnimationJS/>
    </View>
    }
      <View>
        <TouchableOpacity style = {styles.buttonStart} onPress={() => navigation.navigate('Quiz')}>
          <Text style = {styles.buttonTextStart}> COMEÇAR </Text>
        </TouchableOpacity>
      </View>

      <View style = {{flexDirection:'row',marginTop:60}}>
        <TouchableOpacity style = {styles.buttonLink} onPress = {() => {Linking.openURL('https://github.com/santozxy')}}>
          <Ionicons name="logo-github" size={50} style = {{marginHorizontal:30,}} color="#fff" />
          <Text style = {styles.buttonTextLinks}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonLink} onPress = {() => {Linking.openURL('https://reactnative.dev/')}}>
          <Ionicons name="ios-logo-react" size={50} style = {{marginHorizontal:30,}} color="#fff" />
          <Text style = {styles.buttonTextLinks}>React Native</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.buttonLink} onPress = {() => {Linking.openURL('https://www.linkedin.com/in/monnuery-junior-885570250')}}>
          <Ionicons name="logo-linkedin" size={50} style = {{marginHorizontal:30,}} color="#fff" />
          <Text style = {styles.buttonTextLinks}>Linkedin</Text>
        </TouchableOpacity>
      </View>

      <View style = {{flex:1,flexDirection:'row',marginTop:Platform.OS === 'ios' ? 90:60}}>
        <Text style = {{fontSize:12,color:'#fff',marginHorizontal:60,}}> In React Native </Text>
        <Text style = {{fontSize:12,color:'#fff',marginHorizontal:60,}}> QuizJS © 2023 </Text>
      </View>

    </SafeAreaView>
  );
}

