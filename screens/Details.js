import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DetailBottomNavigation from '../components/DetailBottomNavigation';
import colors from '../const/colors';
import { MaterialIcons } from '@expo/vector-icons';

const Details = ({ route, navigation }) => {
  let place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <ImageBackground source={place.image} style={styles.ImageContainer}>
        <View style={styles.header}>
          <MaterialIcons
            name='arrow-back-ios'
            size={24}
            color={colors.white}
            onPress={navigation.goBack}
          />
          <MaterialIcons name='more-vert' size={24} color={colors.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              color: 'white',
              fontSize: 36,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons
              name='star'
              size={24}
              color={colors.red}
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name='favorite' size={24} color={colors.red} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <MaterialIcons name='place' size={24} color={colors.primary} />
          <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
            {place.location}
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          About The Trip
        </Text>
        <Text style={{ color: colors.dark, marginTop: 10, lineHeight: 22 }}>
          {place.details}
        </Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: colors.white,
            }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Nunito_400Regular',
              color: colors.white,
            }}>
            /PER DAY
          </Text>
        </View>
        <View
          style={{
            height: 50,
            borderRadius: 10,
            width: 150,
            backgroundColor: colors.white,
            marginRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{ color: colors.primary, fontSize: 18, fontWeight: '700' }}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
    right: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 30,
  },
  ImageContainer: {
    flex: 0.7,
    overflow: 'hidden',
  },
  header: {
    marginTop: 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: 'white',
    flex: 0.3,
    backgroundColor: colors.white,
  },
  footer: {
    height: 70,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
