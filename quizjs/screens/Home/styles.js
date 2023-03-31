import {StyleSheet,Platform } from 'react-native';
import {primary,secundary} from '../../colors'

 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:primary,
    alignItems:'center',
  },
  title1:{
    fontSize:45,
    fontWeight:'bold',
    color:'#fff',
    marginTop: Platform.OS === 'ios' ? 10:30
  },
  title2:{
    fontSize:45,
    fontWeight:'bold',
    color:secundary,
    marginTop: Platform.OS === 'ios' ? 10:30
  },

  buttonStart:{
    backgroundColor:secundary,
    marginTop:50,
    paddingHorizontal:70,
    borderRadius:15,
    borderBottomWidth:6,
    borderColor:'#A69429',
    shadowColor:secundary,
    shadowOffset:{
      width:2,
      height:3,
    },
    shadowOpacity: 0.97,
    shadowRadius:4.65,
    elevation:6
  },
  buttonTextStart:{
    fontSize:19,
    fontWeight:'bold',
    margin:10,
    color:primary
  },
  buttonLink:{
    alignItems:'center'
  },
  buttonTextLinks:{
    fontSize:13,
    fontWeight:'bold',
    color:'#fff'
  },
})

export {styles}