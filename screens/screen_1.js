import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Screen_1({ navigation }) {
	const pressHandler = () => {
		navigation.goBack();
	};

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Screen 1</Text>
			<Image
				source={{
					uri:
						"https://cdn.pixabay.com/photo/2020/11/12/23/18/sunset-5737120_960_720.jpg",
				}}
				style={{
					width: 340,
					height: 209,
					marginBottom: 24,
					marginLeft: "auto",
					marginRight: "auto",
				}}
			/>
			<Button title="Go Back to Home Screen" onPress={pressHandler} />
		</View>
	);
}
