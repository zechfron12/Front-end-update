import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const Chunk = (props) => {
	const spot = props.spots.map((element) => {
		if (element.status === 'occupied')
			return <Ionicons name='car-sharp' size={30} color='#FFFFFF' />;
		else
			return (
				<View style={styles.freeSpot}>
					<Text style={styles.freeSpotText}>{element.name}</Text>
				</View>
			);
	});

	return <View style={styles.container}>{spot}</View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '40%',
		justifyContent: 'space-between',
		backgroundColor: '#E16162',
		borderRadius: 6,
		padding: 5,
		margin: 5,
	},
	freeSpot: {
		backgroundColor: '#F9BC60',
		width: 30,
		height: 30,
		borderRadius: 6,
		justifyContent: 'center',
	},
	freeSpotText: {
		color: '#3B414B',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '600',
	},
});

export default Chunk;