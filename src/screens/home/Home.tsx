import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increaseRequest} from '../../redux/actions';
// import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const {loading, number} = useSelector((store: any) => store.home);
  //   const number = 10;

  const handleOnPress = () => {
    dispatch(increaseRequest(number));
    // dispatch(increaseSuccess(number));
  };

  console.log('inside home', number);

  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text style={styles.txt_style}>{`The number is: ${number}`}</Text>
      </View>

      <TouchableOpacity style={styles.btn_style} onPress={handleOnPress}>
        <Text style={styles.txt_style1}>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  valueSection: {
    marginBottom: 10,
  },
  txt_style: {color: 'black', fontSize: 20},
  txt_style1: {color: 'white', fontSize: 15, padding: 15},
  btn_style: {paddingHorizontal: 10, borderRadius: 10, backgroundColor: 'blue'},
});
