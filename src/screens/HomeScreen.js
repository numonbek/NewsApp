import React, {Component} from 'react';
import {View, Text} from 'react-native';
import config from '../../config/config';
import Categories from '../Components/Categories';

class HomeScreen extends Component {
  //   componentDidMount() {
  //     console.log(config.API_KEY);
  //   }

  render() {
    return (
      <View>
        <Categories />
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
