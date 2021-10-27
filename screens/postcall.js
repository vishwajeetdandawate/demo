import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as api from '../API';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
const postcall = () => {
  const [name, setName] = useState();
  const [designation, setDesigation] = useState();
  const [shift, setShift] = useState();

  postRequest = (name, designation, shift) => {
    api
      .insertCall(name, designation, shift)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      {/* <Text>Welcome to PostCall Screen</Text> */}
      <Text style={{paddingBottom: 20, fontSize: 20, color: 'red'}}>
        Please Enter Your Details
      </Text>
      <FormInput
        labelValue={name}
        onChangeText={personName => setName(personName)}
        placeholderText="Name"
        // placeholderTextColor="red"
      />
      <FormInput
        labelValue={designation}
        onChangeText={personDesigation => setDesigation(personDesigation)}
        placeholderText="Desigation"
      />
      <FormInput
        labelValue={shift}
        onChangeText={personShift => setShift(personShift)}
        placeholderText="Shift"
      />
      <FormButton
        buttonTitle="Post"
        // onPress={() =>alert ("posted successfuly")}
        onPress={() => postRequest(name, designation, shift)}
      />
    </View>
  );
};

export default postcall;
