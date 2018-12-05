import React, {Component} from 'react';
import {
    Text
} from "native-base";
import {StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import {Col} from "react-native-easy-grid";

export default class SimbienValueForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            db: '',
            dt: ''
        }
    }

    getSmalianValue = () => {

        let db = this.db.props.value.trim();
        let dt = this.dt.props.value.trim();

        if (db === '' || dt === '') {
            Alert.alert("Error", "Fill all fields before hitting the compute button");
            return -1;
        } else if (parseInt(db) < parseInt(dt)) {
            Alert.alert("Error", "Diameter of larger end of the log cannot be lesser than diameter of smaller end");
            return -1;
        }

        return this.calculateVolume(parseInt(db), parseInt(dt)).toFixed(2);
    };

    calculateVolume = (db, dt) => {

        let C = 0.0001570796;
        let T = Math.pow(db / 2, 2);
        let B = Math.pow(dt / 2, 2);

        return parseFloat(((T + B) * C).toFixed(2));
    };

    render() {
        return (
            <Col style={styles.content}>
                <Text style={{color: 'grey', fontWeight: '700', marginBottom: 10}}>Ready Reckoner</Text>
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
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        this.props.parentScreen.callback(parseFloat(this.getSmalianValue()))
                    }}>
                    <Text style={styles.buttonText}>COMPUTE</Text>
                </TouchableOpacity>
            </Col>

        );
    }
}

const styles = StyleSheet.create({

    content: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        height: 37,
        borderColor: 'grey',
        marginTop: 2,
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'grey',
        marginBottom: 2,
        width: '100%',
        marginRight: 5
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