import { StyleSheet, Text, View } from 'react-native';
import SelectPakingScreen from './src/screens/SelectParkingScreen/SelectPakingScreen';

export default function App() {
	return (
		// <View>
		<SelectPakingScreen></SelectPakingScreen>
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
