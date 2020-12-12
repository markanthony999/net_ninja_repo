import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Screen_1 from "../screens/screen_1";
import Screen_2 from "../screens/screen_2";

const screens = {
	Home: {
		screen: Home,
	},
	Screen_1: {
		screen: Screen_1,
	},
	Screen_2: {
		screen: Screen_2,
	},
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
