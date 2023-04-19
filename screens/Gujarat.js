import React from 'react';
import {View,Text} from 'react-native';
import MyHeader from '../Components/Header';

export default class Gujarat extends React.Component{
    render(){
      return(
        <View>
          <MyHeader title="Gujarat" navigation={this.props.navigation}></MyHeader>
          <Text> This is Gujarat</Text>
        </View>
      )
    }
  }