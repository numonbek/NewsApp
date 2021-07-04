import React, {Component} from 'react';
import {ScrollView} from 'react-native';

const categories = [
  'Entertaiment',
  'Business',
  'Politics',
  'Health',
  'Technology',
  'Sports',
];

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView horizontal={true}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text>{category}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
