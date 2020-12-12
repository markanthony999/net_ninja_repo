import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
	const pressHandler = () => {
		navigation.push("Screen_1");
	};

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
			<Image
				source={{
					uri:
						"https://cdn.pixabay.com/photo/2020/12/06/17/58/trees-5809559_960_720.jpg",
				}}
				style={{
					width: 340,
					height: 209,
					marginBottom: 24,
					marginLeft: "auto",
					marginRight: "auto",
				}}
			/>
			<Button title="Go To Screen_1" onPress={pressHandler} />
		</View>
	);
}
