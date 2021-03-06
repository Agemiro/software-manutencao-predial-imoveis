import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Perfil from './Perfil';
import Produtos from './Produtos';
import OrdemServicos from './OrdemServicosPrestador';

const Tab = createBottomTabNavigator();

export default function PrincipalPrestador({navigation}) {

  return (
    
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000080',
      }}
    >
      <Tab.Screen
        name="OrdemServiços"
        component={OrdemServicos}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-greeting" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>

  );

}
