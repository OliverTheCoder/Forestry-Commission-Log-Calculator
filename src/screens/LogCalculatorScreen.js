import React, {Component} from 'react';
import {
    Body, Button, Container, Content, Header, Icon, Left, Right, Text
} from "native-base";
import {StyleSheet, TextInput, Alert, AsyncStorage} from "react-native";
import DoubleLogForm from '../components/DoubleLogForm';
import LogForm from '../components/LogForm';
import LogCalculatorFooter from "../components/LogCalculatorFooter";

export default class LogCalculatorScreen extends Component {

    array = [];

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            userPref: this.props.navigation.getParam('userPref', 'option1')
        }
    }

    loadPage = async () => {
        try {
            // get user saved preferences
            const userPreference = await AsyncStorage.getItem('@FCLogCalculator:key');
            if (userPreference !== null) {
                this.setState({userPref: userPreference});
            }
        } catch (error) {
            console.log(error);
        }
    };

    loadForms = (userPref) => {

        let noOfRecords = this.props.navigation.getParam('noOfLogsRecorded', 0);

        if (userPref === 'option1') {
            return this.loadDoubleLogForms(noOfRecords);
        } else {
            return this.loadLogForms(noOfRecords)
        }
    };

    loadLogForms = (noOfLogsRecorded) => {
        this.array = [];
        for (let i = 1; i <= noOfLogsRecorded; i++) {
            this.array.push(<LogForm key={i} ref={"ref" + i} badge={i}/>)
        }
        return this.array;
    };

    loadDoubleLogForms = (noOfLogsRecorded) => {
        this.array = [];
        for (let i = 1; i <= noOfLogsRecorded; i++) {
            this.array.push(<DoubleLogForm key={i} ref={"ref" + i} badge={i}/>)
        }
        return this.array;
    };

    refreshLogCalculatorScreen = () => {
        // refreshes log calculator screen due to change in user preferences
        this.loadPage();
    };

    getVolumes = () => {

        let volumes = [];

        Object.entries(this.refs).forEach(
            ([key, value]) => {
                let volume = this.refs[key].getVolume().toPrecision(4);
                volumes.push(volume);
            }
        );

        return volumes;
    };

    render() {

        return (
            <Container>
                <Header style={{backgroundColor: '#2ecc71'}}>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.navigation.popToTop()
                        }}><Icon name='arrow-back'/></Button>
                    </Left>
                    <Body>
                    <Text style={{color: '#fff'}}>Log Calculator</Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate('SimbienValueCalculator')
                            }}
                        ><Icon name='calculator'/>
                        </Button>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate('Settings', {
                                    refreshLogCalculatorScreen: this.refreshLogCalculatorScreen.bind(this),
                                    userPref: this.state.userPref
                                })
                            }}
                        ><Icon name='settings'/></Button>
                    </Right>
                </Header>

                <Content ref={(ref) => this.content = ref}>
                    {
                        this.loadForms(this.state.userPref)
                    }
                </Content>

                <LogCalculatorFooter
                    navigation={this.props.navigation}
                    getVolumes={this.getVolumes.bind(this)}
                />

            </Container>
        );
    }
}