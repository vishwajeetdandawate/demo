import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import BottomTab from './BottomTab';
import DialogModal from '../components/DialogModal';
import postcall from './postcall';
import CardView from './CardView';
import Update from './Update';



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ height: 150, width: 120 }}
          source={{ uri:'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' }}
        />

      </View>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

function LeftPanel() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Tabs"
        component={BottomTab}
        options={{ drawerLabel: 'Tabs' }}
      />
      <Drawer.Screen
        name="DialogModal"
        component={DialogModal}
        options={{ drawerLabel: 'DialogModal' }}
      />
       <Drawer.Screen
        name="Add Employee"
        component={postcall}
        options={{ drawerLabel: 'Add Employee' }}
      />
       <Drawer.Screen
        name="Employees List"
        component={CardView}
        options={{ drawerLabel: 'View Employee' }}
      />
        {/* <Drawer.Screen
        name="Update Employee"
        component={Update}
        options={{ drawerLabel: 'Update Employee' }}
      /> */}
    </Drawer.Navigator>
  );
}

export default LeftPanel;