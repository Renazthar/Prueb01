import { Drawer } from 'expo-router/drawer';
import {FontAwesome} from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="inicio" 
        options={{
          drawerLabel: 'Inicio',
          title: 'INICIO',
          drawerIcon: ({color})=> (<FontAwesome name='home' size={24} color={'#7893df'}></FontAwesome>),
        }}
      />
      <Drawer.Screen
        name="nosotros" 
        options={{
          drawerLabel: 'Nosotros',
          title: 'NOSOTROS',
          drawerIcon: ({color})=> (<FontAwesome name='users' size={24} color={'#7893df'}></FontAwesome>),
        }}
      />
        <Drawer.Screen
        name="contactos" 
        options={{
          drawerLabel: 'Contactos',
          title: 'CONTACTOS',
          drawerIcon: ({color})=> (<FontAwesome name='phone' size={24} color={'#7893df'}></FontAwesome>),
        }}
        />
    </Drawer>
  );
}
