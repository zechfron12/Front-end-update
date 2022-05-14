import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ParkDetails from '../../components/ParkDetails';
import SlotSelector from '../../components/SlotSelector';
import MainButton from '../../components/MainButton/mainButton';
import MySwitch from '../../components/MySwitch';

const SelectPakingScreen = () => {
	const [isReserved, setIsReserved] = useState(false);
	return (
		<View style={styles.container}>
			<View style={{ width: '85%' }}>
				<Ionicons name='menu-sharp' size={45} color='#FFFFFE' />
			</View>
			<ParkDetails
				title='Alexandru Ioan Cuza University of Iasi'
				details='100'
				priceUnit='LEI'
				timeUnit='/ Hr'
			></ParkDetails>
			<Text style={styles.descriptiveText}>Select preferred space</Text>
			<SlotSelector></SlotSelector>

			<View style={styles.rowDisplay}>
				<Text style={styles.descriptiveText}>
					Reserve spot for another time
				</Text>
				<MySwitch
					value={isReserved}
					setValue={setIsReserved}
				></MySwitch>
			</View>
			<MainButton text='continue'></MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#004643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	descriptiveText: {
		color: '#ABD1C6',
		fontSize: 16,
		fontWeight: '400',
		lineHeight: 24,
		margin: 10,
	},
	rowDisplay: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		flexWrap: 'nowrap',
		margin: 10,
	},
});

export default SelectPakingScreen;
