import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const contactos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contáctanos</Text>
      <Text style={styles.subtitulo}>¡Encuéntranos en nuestras redes sociales!</Text>
      <TouchableOpacity style={[styles.boton, { backgroundColor: '#25d366' }]} onPress={() => Linking.openURL('https://wa.me/51999999999')}>
        <FontAwesome name="whatsapp" size={20} color="white"></FontAwesome>
        <Text style={styles.botontext}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, { backgroundColor: '#0066ff' }]} onPress={() => Linking.openURL('https://www.facebook.com')}>
        <FontAwesome name="facebook-square" size={20} color="white"></FontAwesome>
        <Text style={styles.botontext}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, { backgroundColor: '#f59a33' }]} onPress={() => Linking.openURL('https://www.instagram.com')}>
        <FontAwesome name="instagram" size={20} color="white"></FontAwesome>
        <Text style={styles.botontext}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, { backgroundColor: '#ff0000' }]} onPress={() => Linking.openURL('https://www.youtube.com')}>
        <FontAwesome name="youtube-play" size={20} color="white"></FontAwesome>
        <Text style={styles.botontext}>YouTube</Text>
      </TouchableOpacity>
      <View style={styles.correo}>
        <FontAwesome name="envelope-o" size={20} color="white"></FontAwesome>
        <Text style={styles.infotext}>tecnozilla@gmail.com</Text>
      </View>
      <View style={styles.info}>
        <FontAwesome name="phone" size={20} color="white"></FontAwesome>
        <Text style={styles.infotext}>+51 995 413 692</Text>
      </View>
      <View style={styles.info}>
        <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
        <Text style={styles.infotext}>Av. Arequipa 2450, Lince, Lima</Text>
      </View>
      <View style={styles.info}>
        <FontAwesome name="clock-o" size={20} color="white"></FontAwesome>
        <Text style={styles.infotext}>Lun a Sáb: 9:00 am - 7:00 pm</Text>
      </View>
      <Text style={styles.pie}>© 2026 TECNOZILLA-TEAM | Todos los derechos reservados.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3b3a3a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titulo: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#7893df'
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 10,
    color: 'grey',
    fontStyle: 'italic',
  },
  boton: {
    padding: 15,
    width: '60%',
    marginVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  botontext: {
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  correo: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  info: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  infotext: {
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 16,
  },
  pie: {
    fontSize: 15,
    color: 'grey',
    marginVertical: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  }
})
export default contactos