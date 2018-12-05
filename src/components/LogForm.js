import React, {Component} from 'react';
import {
    Badge, Body, Card, CardItem, Left, Row, Text
} from "native-base";
import {StyleSheet, TextInput} from "react-native";

export default class LogForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logLength: '',
            db: '',
            dt: ''
        }
    }

    getVolume = () => {

        let logLength = this.logLength.props.value.trim();
        let db = this.db.props.value.trim();
        let dt = this.dt.props.value.trim();

        if (logLength === '' || db === '' || dt === '') {
            return -1;
        }

        return this.calculateVolume(parseFloat(logLength), parseInt(db), parseInt(dt))
    };

    calculateVolume = (logLength, db, dt) => {

        let C = 0.0001570796;
        let T = Math.pow(db / 2, 2);
        let B = Math.pow(dt / 2, 2);

        return logLength * parseFloat(((T + B) * C).toFixed(2));
    };

    render() {
        return (
            <Card style={{flex: 0, marginLeft: 10, marginRight: 10}}>
                <CardItem>
                    <Left>
                        <Badge style={{backgroundColor: '#2ecc71'}}><Text>{this.props.badge}</Text></Badge>
                        <Body>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='log length'
                            placeholderTextColor='grey'
                            style={[styles.input, {width: '100%'}]}
                            keyboardType='numeric'
                            ref={(ref) => this.logLength = ref}
                            onChangeText={(logLength) => {
                                this.setState({logLength});
                            }}
                            value={this.state.logLength}
                        />
                        <Row>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='db'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.db = ref}
                                onChangeText={(db) => {
                                    this.setState({db});
                                }}
                                value={this.state.db}
                            />
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='dt'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.dt = ref}
                                onChangeText={(dt) => {
                                    this.setState({dt});
                                }}
                                value={this.state.dt}
                            />
                        </Row>
                        </Body>
                    </Left>
                </CardItem>
            </Card>

        );
    }
}

const styles = StyleSheet.create({

    input: {
        height: 37,
        borderColor: 'grey',
        marginTop: 2,
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'grey',
        marginBottom: 2,
        width: '50%',
        marginRight: 5
    }
});