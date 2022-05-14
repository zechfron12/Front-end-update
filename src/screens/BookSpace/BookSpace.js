import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import BookSpaceOptions from '../../components/BookSpaceOptions';
import MainButton from '../../components/MainButton';
import SideMenuBar from '../../components/SideMenuBar';
import ParkDetails from '../../components/ParkDetails';

const BookSpace = () => {
	return (
		<View style={styles.container}>
			<SideMenuBar></SideMenuBar>
			<ParkDetails
				title='Faculty of Computer Science Park A'
				details='100 LEI'
				timeUnit='/ Hr'
			></ParkDetails>
			<Text style={styles.descriptiveText}> Space 4c </Text>
			<BookSpaceOptions></BookSpaceOptions>
			<MainButton text='Book Space'></MainButton>
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
		fontWeight: '600',
		fontSize: 18,
		margin: 10,
	},
});

export default BookSpace;
