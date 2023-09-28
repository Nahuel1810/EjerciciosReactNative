import { View } from 'react-native';
import Button from '../components/Button';

export default function WorkList({ navigation }) {
    return (
        <View>
            <Button
                title="TP 11"
                onPress={() => navigation.navigate('TP11')}
                color="#7066E1"
                outline={true}
            />
            <Button
                title="TP 12"
                onPress={() => navigation.navigate('TP12')}
                color="#7066E1"
                outline={true}
            />
            <Button
                title="TP 13"
                onPress={() => navigation.navigate('TP13')}
                color="#7066E1"
                outline={true}
            />
            <Button
                title="TP 14"
                onPress={() => navigation.navigate('TP14')}
                color="#7066E1"
                outline={true}
            />
        </View>
    );
}