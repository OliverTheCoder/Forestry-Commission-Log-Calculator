import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, TextInput, TouchableOpacity, View, Image, Text, Alert} from 'react-native';
import {
    Container
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            noOfLogsRecorded: ''
        }
    }

    launchLogCalculatorScreen = async () => {
        try {
            // get user saved preferences
            const userPreference = await AsyncStorage.getItem('@FCLogCalculator:key');

            this.props.navigation.navigate('LogCalculator', {
                noOfLogsRecorded: this.inputTotalLogsRecorded.props.value,
                userPref: userPreference
            })

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Container>
                <Grid style={styles.content}>
                    <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={styles.logo} source={require('../asset/img/logo.png')}/>
                        <Text style={styles.text}>Log Calculator</Text>
                        <Text style={styles.text}>The easiest & fastest way to calculate your log volumes</Text>
                        <TextInput
                            ref={(ref) => this.inputTotalLogsRecorded = ref}
                            onChangeText={(noOfLogsRecorded) => {
                                this.setState({noOfLogsRecorded})
                            }}
                            value={this.state.noOfLogsRecorded}
                            underlineColorAndroid='transparent'
                            keyboardType={'numeric'}
                            placeholder='no of logs'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.buttonContainer} 
                        onPress={() => {

                            if(this.inputTotalLogsRecorded.props.value.trim() === ''){
                                Alert.alert("Error", "Enter no of logs recorded before continuing");
                            } else{
                                this.launchLogCalculatorScreen();
                            }
                        }}>
                            <Text style={styles.buttonText}>CONTINUE</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    primaryColor: {
        color: '#2ecc71'
    },
    content: {
        backgroundColor: '#2ecc71',
        padding: 20
    },
    logo: {
        width: 150,
        height: 150
    },
    text: {
        color: '#fff',
        width: 200,
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.7
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: 10,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 10,
        width: '100%'
    },
    buttonContainer: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        width: '100%',
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});