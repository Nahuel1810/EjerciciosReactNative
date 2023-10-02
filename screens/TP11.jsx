import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TP11() {
    const [inputText, setInputText] = useState('');
    const [islandCount, setIslandCount] = useState(0);

    const countIslands = (text) => {
        let islandCount = 0;
        let i = 0;

        while (i < text.length - 2) {
            if (text[i] === text[i + 2] && text[i + 1] !== text[i]) {
                islandCount++;
                i += 3;
            } else {
                i++;
            }
        }

        return islandCount;
    };

    useEffect(() => {
        const count = countIslands(inputText);
        setIslandCount(count);
    }, [inputText]);

    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', top: -50 }}>
                <Text style={styles.title}>Trabajo Practico N°11</Text>
            </View>

            <Text style={styles.label}>Ingresa una cadena de caracteres:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setInputText(text)}
                value={inputText}
            />
            <Text style={styles.result}>Número de Islotes: {islandCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7066E1',
        padding: 16,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Kanit_700Bold',
        color: '#f0f0f0',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontFamily: 'Kanit_700Bold',
        color: '#f0f0f0',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 100,
        padding: 8,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        color: '#707070',
        paddingLeft: 15,
        fontFamily: 'Kanit_300Light_Italic',
    },
    result: {
        fontSize: 18,
        fontFamily: 'Kanit_700Bold',
        color: '#f0f0f0',
        marginTop: 20,
    },
});
