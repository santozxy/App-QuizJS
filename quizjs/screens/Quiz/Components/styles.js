import {StyleSheet,Platform} from 'react-native';
import {primary,secundary} from '../../../colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Estilo das questões
  questionContainer: {
    margin:Platform.OS === 'web'? 20:0,
    marginBottom:Platform.OS === 'web'? 0:20,
    marginHorizontal:Platform.OS === 'web'? 0:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#292828',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:2,
      height:3  ,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  questionText: {
    color: secundary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:5
  },
  //Estilo das opções
  optionsContainer: {
    padding:25,
    margin: 20,
    backgroundColor:'#292828',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:2,
      height:3  ,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  option: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: secundary,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor:'#000',
    shadowOffset:{
      width:3,
      height:3,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  optionText: {
    textAlign:'center',
    fontWeight:'bold',
    color: primary,
    fontSize: 15,
  },
  selectedOptionCorrect: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent:'center',
  },
   selectedOptionIncorrect: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor:'#B22222',
    alignItems: 'center',
    justifyContent:'center',
  },
  //Estilo da barra de progresso
  barProgress:{
    marginTop:20,
    borderRadius:5,
  },
  //Estilo da pontuação 
  titleScore1:{
    fontSize:45,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    marginTop:15
  },
  titleScore2:{
    fontSize:45,
    fontWeight:'bold',
    color:secundary,
    marginTop:15
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    paddingHorizontal: 10,
    backgroundColor:'#292828',
    borderRadius:10,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:secundary,
    shadowColor:'#000',
    shadowOffset:{
      width:2,
      height:3  ,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  scoreContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical:15,
    backgroundColor:'#303030',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:2,
      height:3  ,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  scoreText: {
    color: secundary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreButtons: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    backgroundColor:'#303030',
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{
      width:2,
      height:3  ,
    },
    shadowOpacity: 0.9,
    shadowRadius:8.65,
    elevation:8
  },
  //Estilo dos modais
    modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: secundary,
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 8,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtonText: {
    color: secundary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
export {styles}