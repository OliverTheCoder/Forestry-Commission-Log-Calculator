import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import LogCalculatorScreen from "./src/screens/LogCalculatorScreen";
import LogVolumesScreen from "./src/screens/LogVolumesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SimbienValueCalculatorScreen from "./src/screens/SimbienValueCalculatorScreen";

export default class App extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        LogCalculator: LogCalculatorScreen,
        LogVolumes: LogVolumesScreen,
        Settings: SettingsScreen,
        SimbienValueCalculator: SimbienValueCalculatorScreen
    },
    {
        initialRouteName: 'Home',
    }
);