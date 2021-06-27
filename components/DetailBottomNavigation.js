import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DetailBottomNavigation = () => {
  return (
    <View>
      <View
        style={{
          height: 70,
          bottom: 0,
          zIndex: 100,
          paddingHorizontal: 20,
          backgroundColor: '#fff',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            backgroundColor: '#FFEDEE',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
          }}>
          <MaterialIcons name='add-shopping-cart' size={24} color='#FF6670' />
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            backgroundColor: '#6E8AFA',
            flex: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'whitesmoke',
                fontWeight: 'bold',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailBottomNavigation;
