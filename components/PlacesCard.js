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
const PlacesCard = ({ place, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', place)}
      activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text
            style={{
              color: colors.white,
              padding: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {place.name}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexDirection: 'row',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons name='place' size={22} color='white' />
              <Text
                style={{
                  color: colors.white,
                  marginLeft: 2,
                  fontWeight: 'bold',
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
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    width: width / 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContainer: {
    margin: 5,
  },
});
