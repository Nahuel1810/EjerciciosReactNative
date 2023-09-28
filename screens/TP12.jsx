import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';

export default function TP12({ navigation }) {
    const [inputNumber, setInputNumber] = useState('');
    const [displayCharacter, setDisplayCharacter] = useState('#');
    const [displayResult, setDisplayResult] = useState('');

    const digitPatterns = [
        ['###', '# #', '# #', '# #', '###'], // 0
        ['  #', '  #', '  #', '  #', '  #'], // 1
        ['###', '  #', '###', '#  ', '###'], // 2
        ['###', '  #', '###', '  #', '###'], // 3
        ['# #', '# #', '###', '  #', '  #'], // 4
        ['###', '#  ', '###', '  #', '###'], // 5
        ['###', '#  ', '###', '# #', '###'], // 6
        ['###', '  #', '  #', '  #', '  #'], // 7
        ['###', '# #', '###', '# #', '###'], // 8
        ['###', '# #', '###', '  #', '###'], // 9
    ];

    const drawDigit = (digit) => {
        const pattern = digitPatterns[digit];
        return pattern.map((line) => line.replace(/#/g, displayCharacter)).join('\n');
    };

    const handleDraw = () => {
        if (!isNaN(inputNumber)) {
            const digitArray = inputNumber.split('').map((char) => parseInt(char));
            const result = digitArray.map((digit, index) => (
                <View key={index} style={styles.digitContainer}>
                    <Text style={styles.display}>{drawDigit(digit)}</Text>
                </View>
            ));
            setDisplayResult(result);
        } else {
            setDisplayResult('Error: Ingrese un número válido');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', top: -100 }}>
                <Text style={{ fontSize: 30, fontFamily: 'Kanit_700Bold', color: '#f0f0f0' }}>Trabajo Practico N°12</Text>
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Ingresa un número:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setInputNumber(text)}
                value={inputNumber}
                keyboardType="numeric"
            />
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Carácter de display:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setDisplayCharacter(text)}
                value={displayCharacter}
                maxLength={1}
            />
            <View style={{ margin: 20 }}>
                <Button title="Dibujar" onPress={handleDraw} color={'#f0f0f0'} outline={true} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'Kanit_700Bold', color: '#f0f0f0', textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Resultado:</Text>
            <View style={styles.displayResult}>
                {displayResult}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#7066E1'
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
    display: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    displayResult: {
        width: '100%',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    digitContainer: {
        marginRight: 10,
    },
});
