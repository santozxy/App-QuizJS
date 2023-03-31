import { View, StyleSheet,Text} from 'react-native';
import LottieView from 'lottie-react-native';

//Animação do resultado final caso seja >6 

export default function AnimationGoodResult(){

  return(
    <View>
      <LottieView 
        autoPlay
        loop = {true}
        style={{
          width: 400,
          height: 320,
        }}
        source={require('../../../assets/robo-feliz.json')}
      />

    </View>
  )
};

