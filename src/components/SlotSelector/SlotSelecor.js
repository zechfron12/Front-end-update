import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SlotSelecor = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}> 5 slots Avalible</Text>
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
