import { StyleSheet, Text, View } from 'react-native';
import SelectPakingScreen from './src/screens/SelectParkingScreen';
import BookSpace from './src/screens/BookSpace';
import MakePayment from './src/screens/MakePayment';
import OTP from './src/screens/OTP';
import Succes from './src/screens/Succes';

export default function App() {
	return (
		// <View>
		// <SelectPakingScreen></SelectPakingScreen>
		<BookSpace></BookSpace>
		// <MakePayment></MakePayment>
		// <OTP></OTP>
		// <Succes></Succes>
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
