import React, {Component} from 'react';
import {Badge, Button, Footer, FooterTab, Icon, Text} from "native-base";
import {StyleSheet} from "react-native";
import {Row} from "react-native-easy-grid";

export default class LogVolumeFooter extends Component {

    render() {
        return (
            <Footer>
                <FooterTab style={{backgroundColor: '#2ecc71'}}>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Badge style={{marginTop: 8, backgroundColor: '#fff'}}><Text style={{color: '#2ecc71'}}>T</Text></Badge>
                        <Text style={{marginRight: 10, color: '#fff'}}>TOTAL VOLUME</Text>
                        <Text style={{color: '#fff'}}>{this.props.totalVolume} m3</Text>
                    </Row>
                </FooterTab>
            </Footer>
        );
    }
}

