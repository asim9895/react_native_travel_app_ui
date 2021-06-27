import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import colors from '../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import places from '../const/places';
import PlacesCard from '../components/PlacesCard';
import RecommendedCard from '../components/RecommendedCard';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <View style={styles.header}>
        <MaterialIcons name='sort' size={24} color={colors.white} />
        <MaterialIcons
          name='notifications-none'
          size={24}
          color={colors.white}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 23,
              fontFamily: 'Nunito_400Regular',
            }}>
            Explore The
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 23,
              fontFamily: 'Nunito_400Regular',
            }}>
            Beautiful Places
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Search Place'
            style={{
              color: colors.dark,
              paddingLeft: 10,
              paddingRight: 10,
              width: '90%',
              fontFamily: 'Nunito_400Regular',
            }}
          />
          <MaterialIcons name='search' size={24} color={colors.primary} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View style={styles.iconContainer}>
            <MaterialIcons name='flight' size={30} color={colors.primary} />
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name='beach-access'
              size={30}
              color={colors.primary}
            />
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons name='near-me' size={30} color={colors.primary} />
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons name='place' size={30} color={colors.primary} />
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito_400Regular',
            }}>
            Places
          </Text>
        </View>
        <View>
          <FlatList
            data={places}
            contentContainerStyle={{ paddingLeft: 15 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <PlacesCard place={item} navigation={navigation} />
            )}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito_400Regular',
            }}>
            Recommended
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <FlatList
            data={places}
            contentContainerStyle={{ paddingLeft: 15 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <RecommendedCard place={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    height: 50,
    marginTop: -25,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
