import React, {Component} from 'react';
import {View, Text} from 'react-native';
import config from '../../config/config';
import Categories from '../Components/Categories';
import {API_KEY} from '@env';

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
