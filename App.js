import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      {/* <Image
        style={styles.img}
        source={{
          uri: 'https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg',
        }}
      /> */}
      <ImageBackground
        source={require('./assets/fundo-teste.png')}
        //source={{ uri: 'https://w7.pngwing.com/pngs/627/467/png-transparent-color-ink-running-people-ink-color-run-thumbnail.png' }}  // Para imagem da internet
        style={styles.ImageBackground}
      />
      <SafeAreaView style={styles.section}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            Olá, bem-vindo ao
          </Text>
        </ScrollView>
      </SafeAreaView>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',  // ou 'contain' dependendo de como quer ajustar a imagem
    justifyContent: 'center',  // centraliza os componentes filhos
    width: 360,
    height: 376,
  },
  scroll: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  section: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});