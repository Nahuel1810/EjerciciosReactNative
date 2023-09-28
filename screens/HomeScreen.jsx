import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts, Kanit_700Bold, Kanit_300Light_Italic } from '@expo-google-fonts/kanit';
import Card from '../components/Card';
import WorkList from '../components/WorksList';
import fondo from '../assets/fondo.jpg';

export default function HomeScreen({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        Kanit_700Bold,
        Kanit_300Light_Italic,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ImageBackground source={fondo} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 30, fontFamily: 'Kanit_700Bold', color: '#f0f0f0' }}>Trabajos React Native</Text>
                </View>

                <Card title={'Lista de trabajos'} children={<WorkList navigation={navigation} />} />

                <View style={{ backgroundColor: '#00000030', padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Kanit_300Light_Italic', color: '#f0f0f0' }}>
                        Nahuel Martinez - EEST N°5 - 7° 2°
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
