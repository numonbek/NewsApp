import React, {Component} from 'react';
import {View, Text} from 'react-native';
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

class HomeScreen extends Component {
  //   componentDidMount() {
  //     console.log(config.API_KEY);
  //   }

  render() {
    return (
      <View>
        <Categories />
        <TrendingNews />
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
