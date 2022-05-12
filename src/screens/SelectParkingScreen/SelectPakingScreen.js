import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ParkDetails from '../../components/ParkDetails';
import SlotSelector from '../../components/SlotSelector';
import MainButton from '../../components/MainButton/mainButton';

const SelectPakingScreen = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<View style={styles.container}>
			<View>
				<MaterialIcons name='menu' size={48} color='#FFFFFE' />
			</View>
			<ParkDetails
				title='Alexandru Ioan Cuza University of Iasi'
				price='100'
				priceUnit='LEI'
				timeUnit='Hr'
			></ParkDetails>
			<Text style={styles.descriptiveText}>Select preferred space</Text>
			<SlotSelector></SlotSelector>

			<View style={styles.rowDisplay}>
				<Text style={styles.descriptiveText}>
					Reserve spot for another time
				</Text>
				<Switch
					style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
					trackColor={{ false: '#757F8C47', true: '#F9BC60' }}
					thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
					ios_backgroundColor='#3e3e3e'
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
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
