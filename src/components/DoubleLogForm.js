import React, {Component} from 'react';
import {
    Badge, Body, Card, CardItem, Left, Row, Text
} from "native-base";
import {StyleSheet, TextInput} from "react-native";

export default class DoubleLogForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logLength: '',
            db1: '',
            db2: '',
            dt1: '',
            dt2: ''
        }
    }

    getVolume = () => {

        let logLength = this.logLength.props.value.trim();
        let db1 = this.db1.props.value.trim();
        let db2 = this.db2.props.value.trim();
        let dt1 = this.dt1.props.value.trim();
        let dt2 = this.dt2.props.value.trim();

        if (logLength === '' || db1 === '' || db2 === '' || dt1 === '' || dt2 === '') {
            return -1;
        }

        return this.calculateVolume(parseFloat(logLength), parseInt(db1),
            parseInt(db2), parseInt(dt1), parseInt(dt2))

    };

    calculateVolume = (logLength, db1, db2, dt1, dt2) => {

        let C = 0.0001570796;
        let T = Math.pow(parseInt(((db1 + db2) / 2).toFixed(2)) / 2, 2);
        let B = Math.pow(parseInt(((dt1 + dt2) / 2).toFixed(2)) / 2, 2);

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
                                placeholder='db1'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.db1 = ref}
                                onChangeText={(db1) => {
                                    this.setState({db1});
                                }}
                                value={this.state.db1}
                            />
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='db2'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.db2 = ref}
                                onChangeText={(db2) => {
                                    this.setState({db2});
                                }}
                                value={this.state.db2}
                            />
                        </Row>
                        <Row>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='dt1'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.dt1 = ref}
                                onChangeText={(dt1) => {
                                    this.setState({dt1});
                                }}
                                value={this.state.dt1}
                            />
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='dt2'
                                placeholderTextColor='grey'
                                style={styles.input}
                                keyboardType='numeric'
                                ref={(ref) => this.dt2 = ref}
                                onChangeText={(dt2) => {
                                    this.setState({dt2});
                                }}
                                value={this.state.dt2}
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