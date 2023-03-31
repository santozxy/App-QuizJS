import { View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

/*Animação da Tela Home*/

export default function AnimationJS(){
  return(
    <View>
      <LottieView 
        autoPlay
        loop = {true}
        style={{
          width: 400,
          height: 320,
        }}
        source={require('../../assets/home-animation.json')}
      />
    </View>
  )
}

