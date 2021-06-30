import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../const/colors';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');
const RecommendedCard = ({ place, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', place)}
      activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text
            style={{
              color: colors.white,
              marginLeft: 10,
              marginTop: 5,
              fontSize: 20,
              fontFamily: 'Metrophobic_400Regular',
            }}>
            {place.name}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
                marginLeft: 5,
              }}>
              <MaterialIcons name='place' size={22} color='white' />
              <Text
                style={{
                  color: colors.white,
                  marginLeft: 2,
                  fontFamily: 'Metrophobic_400Regular',
                }}>
                {place.location}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name='star' size={24} color='white' />
              <Text
                style={{
                  color: colors.white,
                  marginLeft: 2,
                  fontWeight: 'bold',
                }}>
                5.0
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                color: colors.grey,
                marginLeft: 2,
                fontWeight: '200',
              }}>
              {place.details}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedCard;

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    width: width - 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContainer: {
    margin: 5,
  },
});
