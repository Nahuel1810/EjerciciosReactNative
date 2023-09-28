import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function TP13({ navigation }) {
    const [inputText, setInputText] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [outputText, setOutputText] = useState('');

    const reverseSubstring = (text, start, end) => {
        const before = text.substring(0, start);
        const reversed = text.substring(start, end + 1).split('').reverse().join('');
        const after = text.substring(end + 1);
        return before + reversed + after;
    };

    const handleReverse = () => {
        if (!isNaN(start) && !isNaN(end) && start >= 0 && end < inputText.length && start <= end) {
            const reversedText = reverseSubstring(inputText, start, end);
            setOutputText(reversedText);
        } else {
            setOutputText('Error: Inicio y fin no válidos');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', top: -50 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Kanit_700Bold', color: '#f0f0f0' }}>Trabajo Practico N°13</Text>
            </View>
            <View>

            </View>
            <Text style={{ fontSize: 24, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 20, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>Ingresa un texto:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setInputText(text)}
                value={inputText}
            />
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Inicio:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    const parsedValue = parseInt(text);
                    if (!isNaN(parsedValue)) {
                        setStart(parsedValue);
                    } else {
                        setStart(0);
                    }
                }}
                value={start.toString()}
                keyboardType="numeric"
            />
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Fin:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    const parsedValue = parseInt(text);
                    if (!isNaN(parsedValue)) {
                        setEnd(parsedValue);
                    } else {
                        setEnd(0);
                    }
                }}
                value={end.toString()}
                keyboardType="numeric"
            />
            <View style={{ margin: 20 }}>
                <Button title="Invertir" onPress={handleReverse} color={'#f0f0f0'} outline={true} />
            </View>

            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Resultado:</Text>
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_300Light_Italic', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5, backgroundColor: '#1f1f1f', padding: 5, borderRadius: 10, width: '80%' }}>{outputText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#7066E1',
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
        fontFamily: 'Kanit_300Light_Italic'
    },
});
