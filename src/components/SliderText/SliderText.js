import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
const width = (Dimensions.get('window').width * 85) / 100;

const SliderText = (props) => {
	const multiplier = props.multiplier || 1.15;
	const maximumValue = props.maximumValue || 1;
	const stepValue = props.stepValue || 1;
	const value = props.value || 0;
	const logic = maximumValue * multiplier;
	const [sliderValue, setSliderValue] = useState(props.sliderValue || 0);

	const left =
		sliderValue >= 100000000
			? (sliderValue * width) / logic - 40
			: (sliderValue * width) / logic;

	const sendSliderValue = (slider) => {
		setSliderValue(slider);
		props.onValueChange(slider);
	};

	return (
		<View style={[styles.slider, props.containerStyle]}>
			<View
				style={{
					height: 50,
					paddingHorizontal: 20,
					transform: [{ translateX: left }],
					justifyContent: 'center',
					width: '40%',
					backgroundColor: '#FCFCFF',
					borderRadius: 6,
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.23,
					shadowRadius: 2.62,

					elevation: 4,
				}}
			>
				<Text style={[styles.text, props.customCountStyle]}>
					{Math.floor(sliderValue) + ' hours'}
				</Text>
			</View>
			<Text style={{ fontWeight: '400', fontSize: 16 }}>
				Estimate Duration
			</Text>
			<Slider
				style={[styles.slider, props.sliderStyle]}
				minimumValue={props.minimumValue || 0}
				maximumValue={maximumValue}
				step={stepValue}
				minimumTrackTintColor={props.minimumTrackTintColor || '#E16162'}
				thumbTintColor={props.thumbTintColor || '#E16162'}
				maximumTrackTintColor={props.maximumTrackTintColor || '#8E8E93'}
				onValueChange={(e) => sendSliderValue(e)}
				onSlidingComplete={props.onSlidingComplete}
				value={value}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontWeight: '400',
		color: '#001E1D',
		textAlign: 'center',
	},
	slider: {
		width: width - 20,
		marginVertical: 20,
		alignSelf: 'center',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	customLabel: {
		fontSize: 20,
	},
});

export default SliderText;
