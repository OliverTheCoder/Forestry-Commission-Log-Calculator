import React, {Component} from 'react';
import {
    Badge, Body, Card, CardItem, Left, Row, Text
} from "native-base";
import {StyleSheet} from "react-native";
import {Col} from "react-native-easy-grid";

export default class LogVolume extends Component {

    render() {
        return (
            <Card style={{flex: 0, marginLeft: 10, marginRight: 10}}>
                <CardItem>
                    <Left>
                        <Badge style={{backgroundColor: '#2ecc71'}}><Text>{this.props.badge}</Text></Badge>
                        <Body>
                        <Col>
                            <Text>Volume</Text>
                            <Text style={{color: 'grey'}}>{this.props.volume}</Text>
                        </Col>
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