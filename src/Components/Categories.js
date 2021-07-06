import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {API_KEY} from '@env';

const categories = [
  'Entertaiment',
  'Business',
  'Politics',
  'Health',
  'Technology',
  'Sports',
];

class Categories extends Component {
  state = {};
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 19,
                margin: 10,
                borderRadius: 10,
              }}>
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
