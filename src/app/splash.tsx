import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function splash() {

    useEffect(() => {
        const tiempo = setTimeout(() => {
            router.replace('/(drawer)/inicio');
        }, 5000)

        return () => clearTimeout(tiempo)
    }, []);

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>APLICACIONES MOVILES</Text>

            <Text style={styles.texto}>Cargando Aplicacion...</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        backgroundColor: '#7893df',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    texto: {
        fontSize: 18,
        color: 'white',
        marginTop: 20,
    },
})