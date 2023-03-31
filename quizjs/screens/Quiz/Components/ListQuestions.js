import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  Modal,
  Share
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AnimationBadResult from './AnimationBadResult';
import AnimationGoodResult from './AnimationGoodResult';
import { styles } from './styles';
import { primary, secundary } from '../../../colors';
import { questions } from '../../../questions';

export default function QuestionsList() {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
//Estado usado para armazenar o index

  const [progress, setProgress] = useState(0);
//Estado usado para armazenar o progresso de acordo com o avanço de questões

  const [score, setScore] = useState(0);
//Estado usado para armazenar a pontuação do jogador

  const [selectedOption, setSelectedOption] = useState(null);
//Estado usado para armazenar a alternativa selecionada

  const [verify, setVerify] = useState(null);
//Estado usado para armazenar a resposta correta e utilizar como forma de verificação

  const [modalQuit, setModalQuit] = useState(null);
//Estado usado para controlar o modal de saída de ser ou não exibido

  const [modalNext, setModalNext] = useState(null);
//Estado usado para controlar o modal de avançar de ser ou não exibido

  const [time, setTime] = useState(10);
//Estado usado para armazenar o tempo limite de cada questão


  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1); // subtrai 1 segundo do tempo restante
      }, 1000);
      return () => clearTimeout(timer); // limpa o temporizador quando a tela é desmontada
    } else {
      currentIndex <= 9 && handleNextQuestion(); // avança para a próxima questão caso o index seja menor ou igual a 9
      currentIndex <= 9 && setTime(10);
    }
  }, [time, navigation]);

  const handleAnswer = (answer) => { //Função usada para verificar se a alternativa selecionada é a correta e para somar a pontuação
    if (answer === questions[currentIndex].answer) {
      setScore(score + 1);
      setVerify(answer);
    }
    setSelectedOption(answer);
  };

  const handleNextQuestion = () => { //Função usada para avançar de index/questão junto a barra de progresso
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
    setProgress(progress + 0.1);
    time > 0 && setTime(time - time + 10);
  };

  const renderOption = ({ item }) => ( //Renderização das opções
    <TouchableOpacity
      style={[
        styles.option,
        selectedOption === item && item != verify
          ? styles.selectedOptionIncorrect
          : item === verify && styles.selectedOptionCorrect,
      ]}
      onPress={() => handleAnswer(item)}
      disabled={selectedOption !== null}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderQuestion = ({ item }) => ( //Renderização das questões
    <SafeAreaView>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{item.question}</Text>
      </View>
      <FlatList
        data={item.options}
        renderItem={renderOption}
        keyExtractor={(item) => item}
        style={styles.optionsContainer}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => setModalQuit(true)}
          style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name="home" size={45} color={secundary} />
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
            {' '}
            Home{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            selectedOption !== null ? handleNextQuestion() : setModalNext(true)
          }
          style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="arrow-right-bold-hexagon-outline"
            size={45}
            color={secundary}
          />
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
            {' '}
            Próx{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  const renderScore = () => ( //Renderização da pontuação
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.titleScore1}> Quiz</Text>
        <Text style={styles.titleScore2}>JS </Text>
      </View>

      <View style={styles.scoreContainer}>
        <View style={styles.scoreContent}>
          <Text style={styles.scoreText}> Pontuação Final </Text>
        </View>

        {Platform.OS === 'web' ? null : score < 6 ? (
          <AnimationBadResult />
        ) : (
          <AnimationGoodResult />
        )}

        <View style={styles.scoreContent}>
          <Text style={styles.scoreText}>
            Você acertou {score} de {questions.length} perguntas!
          </Text>
        </View>
      </View>

      <View style={styles.scoreButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ alignItems: 'center', margin: 8 }}>
          <MaterialCommunityIcons name="home" size={40} color={secundary} />
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
            Tela Inicial
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={restart}
          style={{ alignItems: 'center', margin: 8 }}>
          <MaterialCommunityIcons name="restart" size={40} color={secundary} />
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
            Recomeçar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onShare}
      
          style={{ alignItems: 'center', margin: 8 }}>
          <MaterialCommunityIcons
            name="share-variant"
            size={40}
            color={secundary}
          />
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
            Compartilhar
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: Platform.OS === 'ios' ? 60 : 60,
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 12, color: '#fff', marginHorizontal: 6 }}>
          {' '}
          In React Native{' '}
        </Text>
        <Text style={{ fontSize: 12, color: '#fff', marginHorizontal: 6 }}>
          {' '}
          QuizJS © 2023{' '}
        </Text>
      </View>
    </SafeAreaView>
  );

  const restart = () => { //Função de reiniciar o quiz
    setScore(0);
    setCurrentIndex(0);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Esse é um dos meus projetos, acesse meu perfil 🖥️',
        url:
          'https://github.com/santozxy',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalQuit}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Você realmente deseja sair?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalQuit(false)}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={modalNext}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Você precisa selecionar uma alternativa para avançar!
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalNext(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {currentIndex === questions.length ? (
        renderScore()
      ) : (
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: secundary,
            }}>
            {' '}
            {currentIndex}/{questions.length}{' '}
          </Text>
          <View>
            <ProgressBar
              progress={progress}
              color={secundary}
              style={styles.barProgress}
            />
          </View>
          <View style={{ alignSelf: 'center', margin: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                color: secundary,
                margin: 5,
              }}>
              <MaterialCommunityIcons
                name="timer"
                size={18}
                color={secundary}
              />{' '}
              - {time}
            </Text>
          </View>
          <FlatList
            data={questions.slice(currentIndex, currentIndex + 1)}
            renderItem={renderQuestion}
            keyExtractor={(item) => item.question}
          />
        </View>
      )}
    </View>
  );
}