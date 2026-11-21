import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const inicio = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/tecnozilla.png')} style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: 'blue', }} resizeMode="cover"></Image>
                <Text style={styles.titulo}>Bienvenido</Text>
                <Text style={styles.parrafo}>En Tecnozilla le damos poder a tu PC. Aquí encuentras procesadores, tarjetas gráficas, memorias RAM, discos SSD, placas madre, fuentes de poder,
                    coolers y gabinetes para armar la computadora que imaginas, sea para jugar, estudiar, diseñar o trabajar.</Text>
                <Text style={styles.subtitulo}>Destacados</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={styles.caja}>
                        <Text style={styles.cajtitulo}>Tarjeta gráfica RTX 5060 Ti</Text>
                        <Text style={styles.cajparrafo}>Nvidia MSI Gaming GeForce RTX 5000 Series, OC Edition de 8 GB.</Text>
                        <Image source={require('../../../assets/images/desc1.png')} style={{ width: 100, height: 100, marginTop: 10 }}></Image>
                    </View>
                    <View style={styles.caja}>
                        <Text style={styles.cajtitulo}>Case Gamer Mini Torre</Text>
                        <Text style={styles.cajparrafo}>Con iluminación RGB y vidrio templado.</Text>
                        <Image source={require('../../../assets/images/desc2.png')} style={{ width: 100, height: 100, marginTop: 10 }}></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={styles.caja}>
                        <Text style={styles.cajtitulo}>AMD Ryzen 9</Text>
                        <Text style={styles.cajparrafo}>La gama más alta de AMD para creación de contenido, renderizado 3D y gaming.</Text>
                        <Image source={require('../../../assets/images/desc3.png')} style={{ width: 100, height: 100, marginTop: 10 }}></Image>
                    </View>
                    <View style={styles.caja}>
                        <Text style={styles.cajtitulo}>ASUS TUF B360-PRO GAMING</Text>
                        <Text style={styles.cajparrafo}>Placa base ATX para Intel Core de 8.ª y 9.ª generación (LGA 1151).</Text>
                        <Image source={require('../../../assets/images/desc4.png')} style={{ width: 100, height: 100, marginTop: 10 }}></Image>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    titulo: {
        fontSize: 28,
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
    },
    parrafo: {
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 10,
    },
    subtitulo: {
        fontSize: 22,
        marginBottom: 5,
        color: 'grey',
        fontStyle: 'italic',
    },
    caja: {
        backgroundColor: '#57648C',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42%',
        minHeight: 250,
        marginHorizontal: 6,
    },
    cajtitulo: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'center',
        marginBottom: 4,
    },
    cajparrafo: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
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
export default inicio