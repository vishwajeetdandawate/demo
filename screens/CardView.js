import * as React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Birlasoft} from '../server/db.json';
import * as api from '../API';

const CardView = () => {
  deleteRequest = id => {
    api
      .deleteCall(id)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderData = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#fff',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              textAlignVertical: 'center',
              paddingLeft: 5,
              flex: 1,
            }}>
            {item.id} {'.'} {item.name} {'|'} {item.designation} {'|'}{' '}
            {item.shift}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <TouchableOpacity
             style={{paddingRight: 10}}>
              <FontAwesome color="black" size={30} name={'edit'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingRight: 10}}
              onPress={() => deleteRequest(item.id)}>
              <FontAwesome color="black" size={30} name={'trash'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F4F6', paddingTop: 10}}>
      {/* <View style={{alignSelf:'center',padding:20}}>
            <Text style={{fontSize:14,color:'blue',}}>Employee List</Text>
         </View> */}
      <View>
        <FlatList
          data={Birlasoft}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CardView;
