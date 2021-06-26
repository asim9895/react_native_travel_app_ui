import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../const/colors';

const Onboarding = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <ImageBackground source={require('../assets/4.png')} style={{ flex: 1 }}>
        <View style={styles.details}>
          <Text style={styles.header}>Discover</Text>
          <Text style={styles.header}>World With Us</Text>
          <Text style={styles.description}>
            Nature was a Latin translation of the Greek of the Greek word
            physics ,which origionally Related to the intrinsic characteristics
            that plants, animals, and other features of the world develop of
            their own accord.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  details: {
    height: '60%',
    position: 'absolute',
    paddingHorizontal: 40,
    bottom: 0,
  },
  header: {
    color: colors.white,
    fontSize: 28,
    fontFamily: 'CinzelDecorative_700Bold',
  },
  description: {
    marginTop: 10,
    color: colors.secondary,
    fontSize: 11,
    letterSpacing: 1,
    fontFamily: 'Roboto_700Bold',
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 120,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Metrophobic_400Regular',
  },
});
