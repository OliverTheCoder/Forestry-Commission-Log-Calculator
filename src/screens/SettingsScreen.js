import React, {Component} from 'react';
import {AsyncStorage, Alert} from "react-native"
import {
    Body, Button, Card, CardItem, Container, Content, Form, Header, Icon, Left, Picker, Text
} from "native-base";

export default class SettingsScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.navigation.getParam('userPref', 'option1')
        };
    }

    onValueChange(value: string) {
        // update state
        this.setState({
            selected: value
        });
        // save settings in app
        this.storeData(value);
    }

    refreshLogCalculatorScreen = () => {
        this.props.navigation.state.params.refreshLogCalculatorScreen();
    };

    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@FCLogCalculator:key', value);
            // refreshes log calculator screen due to change in user preferences
            this.refreshLogCalculatorScreen();
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#2ecc71'}}>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.navigation.pop()
                        }}><Icon name='arrow-back'/></Button>
                    </Left>
                    <Body>
                    <Text style={{color: '#fff'}}>Settings</Text>
                    </Body>
                </Header>

                <Content>
                    <Card style={{flex: 0, marginLeft: 10, marginRight: 10}}>
                        <CardItem>
                            <Left>
                                <Body>
                                <Form>
                                    <Picker
                                        mode="dropdown"
                                        iosHeader="Select"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        style={{width: undefined}}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Picker.Item label="Accept 2 values each for db & dt" value="option1"/>
                                        <Picker.Item label="Accept a value each for db & dt" value="option2"/>
                                    </Picker>
                                </Form>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
