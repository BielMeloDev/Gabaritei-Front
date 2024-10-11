import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg',
        }}
      />
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <SafeAreaView style={styles.section}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 200,
  },
  scroll: {
    backgroundColor: 'pink',
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