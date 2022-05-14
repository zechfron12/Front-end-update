import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import Chunk from '../Chunk';

const SlotSelecor = (props) => {
	const chunks = props.parkingSpots.map((element) => (
		<Chunk spots={element}></Chunk>
	));
	return (
		<View style={styles.container}>
			<Text style={styles.header}> 5 slots Avalible</Text>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}
			>
				{chunks}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		width: '85%',
		backgroundColor: '#FFFFFF',
		border: 1,
		borderRadius: 6,
	},
	header: {
		fontWeight: '600',
		fontSize: 16,
	},
});

export default SlotSelecor;
