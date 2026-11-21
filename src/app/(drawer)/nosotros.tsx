import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const nosotros = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo2}>Acerca de Nosotros</Text>
        <View style={styles.caja1}>
          <View style={styles.textos}>
            <Text style={styles.titulo}>Tu PC no tiene que ser promedio. Tiene que rugir.</Text>
            <Text style={styles.parrafo}>En Tecnozilla creemos que cada persona merece una PC que responda. Estamos aquí para ayudarte a armar, mejorar y darle poder a tu computadora, sea para jugar, estudiar, diseñar o trabajar.</Text>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <TouchableOpacity style={styles.botonc} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Aq5WXmQQooo')}>
                <Text style={styles.botontext}>Conoce lo que hacemos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botonz} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Aq5WXmQQooo')}>
                <Text style={styles.botontext}>Conoce a Zila</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('../../../assets/images/tecnozilla.png')} style={{ width: 150, height: 150, borderRadius: 50, borderWidth: 2, borderColor: '#7893df' }} resizeMode="cover"></Image>
        </View>
        <Text style={styles.titulo2}>Lo que hacemos por tu pc</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={styles.caja2}>
            <FontAwesome name="microchip" size={24} color="#2dd4bf" style={styles.icono} />
            <Text style={styles.caj2titulo}>Piezas para cada presupuesto</Text>
            <Text style={styles.caj2parrafo}>Te ayudamos a elegir los componentes correctos sin que pagues de más.</Text>
          </View>
          <View style={styles.caja2}>
            <FontAwesome name="comment-o" size={24} color="#2dd4bf" style={styles.icono} />
            <Text style={styles.caj2titulo}>Asesoría que sí te sirve</Text>
            <Text style={styles.caj2parrafo}>Sea tu primera PC o ya seas experto, te orientamos para que compres con seguridad.</Text>
          </View>
          <View style={styles.caja2}>
            <FontAwesome name="bolt" size={24} color="#2dd4bf" style={styles.icono} />
            <Text style={styles.caj2titulo}>Poder para todo uso</Text>
            <Text style={styles.caj2parrafo}>Gaming, estudio, diseño o trabajo: hay una pieza para lo que necesitas.</Text>
          </View>
        </View>
        <Text style={styles.titulo2}>Asi armamos contigo</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={styles.caja3}>
            <Text style={styles.numero}>01</Text>
            <Text style={styles.caj3titulo}>Cuéntanos qué necesitas</Text>
            <Text style={styles.caj3parrafo}>Tu presupuesto y para qué usarás la PC. Nada más..</Text>
          </View>
          <View style={styles.caja3}>
            <Text style={styles.numero}>02</Text>
            <Text style={styles.caj3titulo}>Elegimos las piezas</Text>
            <Text style={styles.caj3parrafo}>Te orientamos hacia los componentes que rinden de verdad.</Text>
          </View>
          <View style={styles.caja3}>
            <Text style={styles.numero}>03</Text>
            <Text style={styles.caj3titulo}>Tu PC cobra vida</Text>
            <Text style={styles.caj3parrafo}>Compras con seguridad y tu equipo empieza a rendir.</Text>
          </View>
        </View>
        <Text style={styles.pie}>© 2026 TECNOZILLA-TEAM | Todos los derechos reservados.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3b3a3a',
    padding: 10,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#7893df',
  },
  caja1: {
    backgroundColor: '#072064',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  textos: {
    flex: 1,
    marginRight: 10,
  },
  parrafo: {
    fontSize: 15,
    lineHeight: 30,
    textAlign: 'justify',
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 10,
  },
  botonc: {
    backgroundColor: 'black',
    padding: 15,
    marginVertical: 10,
    borderRadius: 50,
  },
  botonz: {
    backgroundColor: '#030303',
    padding: 15,
    marginVertical: 10,
    borderRadius: 50,
  },
  botontext: {
    color: '#7893df',
    textAlign: 'center'
  },
  titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#132146',
    marginVertical: 20
  },
  caja2: {
    backgroundColor: '#57648C',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    flex: 1,
    minHeight: 200,
  },
  icono: {
    marginBottom: 8,
  },
  caj2titulo: {
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 4,
  },
  caj2parrafo: {
    fontSize: 12,
    lineHeight: 17,
    fontStyle: 'italic',
    color: 'white',
  },
  caja3: {
    backgroundColor: '#3b3a3a',
    padding: 10,
    marginBottom: 20,
    flex: 1,
    minHeight: 200,
    borderTopWidth: 2,
    borderTopColor: '#2dd4bf',
  },
  numero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2dd4bf',
    marginBottom: 8,
  },
  caj3titulo: {
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 4,
  },
  caj3parrafo: {
    fontSize: 12,
    lineHeight: 17,
    fontStyle: 'italic',
    color: 'white',
  },
  pie: {
    fontSize: 15,
    color: 'grey',
    marginVertical: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  }
})
export default nosotros