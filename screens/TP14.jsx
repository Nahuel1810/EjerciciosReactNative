import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default function TP14() {
    const [inputText, setInputText] = useState('');
    const [vowelCounts, setVowelCounts] = useState([0, 0, 0, 0, 0]);

    const countVowels = (text) => {
        const vowels = 'aeiouAEIOU';
        const counts = [0, 0, 0, 0, 0];

        for (let char of text) {
            if (vowels.includes(char)) {
                const index = vowels.indexOf(char);
                counts[index]++;
            }
        }
        return counts;
    };

    useEffect(() => {
        const counts = countVowels(inputText);
        setVowelCounts(counts);
        if (inputText.length === 500) {
            Alert.alert('Límite de caracteres', 'Has alcanzado el límite de 500 caracteres.');
        }
    }, [inputText, setInputText]);

    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 20 }}>Ingresa una cadena de caracteres:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                    maxLength={500}
                />
            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Kanit_700Bold', fontSize: 20, color: 'white' }}>Resultados:</Text>
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#1f1f1f', borderRadius: 10, marginBottom: 5 }}>
                    <Text style={styles.tableHeader}>A</Text>
                    <Text style={styles.tableHeader}>E</Text>
                    <Text style={styles.tableHeader}>I</Text>
                    <Text style={styles.tableHeader}>O</Text>
                    <Text style={styles.tableHeader}>U</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f0f0f0', borderRadius: 10 }}>
                    <Text style={styles.tableCell}>{vowelCounts[0]}</Text>
                    <Text style={styles.tableCell}>{vowelCounts[1]}</Text>
                    <Text style={styles.tableCell}>{vowelCounts[2]}</Text>
                    <Text style={styles.tableCell}>{vowelCounts[3]}</Text>
                    <Text style={styles.tableCell}>{vowelCounts[4]}</Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#7066E1'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 100,
        color: '#707070',
        paddingLeft: 15,
        fontFamily: 'Kanit_300Light_Italic'
    },

    tableHeader: {
        margin: 8,
        padding: 10,
        fontFamily: 'Kanit_300Light_Italic',
        color: '#f0f0f0'
    },
    tableCell: {
        margin: 8,
        padding: 10,
        fontFamily: 'Kanit_300Light_Italic',
        color: '#1f1f1f'
    }
});
