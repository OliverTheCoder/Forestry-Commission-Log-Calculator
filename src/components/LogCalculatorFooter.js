import React, {Component} from 'react';
import {Button, Footer, FooterTab, Icon, Text} from "native-base";
import {StyleSheet, Alert} from "react-native";

export default class LogCalculatorFooter extends Component {

    render() {
        return (
            <Footer>
                <FooterTab style={{backgroundColor: '#2ecc71'}}>
                    <Button onPress={()=>{
                        this.launchVolumesScreenIfAllFormsFilled(this.props.getVolumes())
                    }
                    }>
                        <Icon name='send' style={{color: '#fff'}}/>
                        <Text style={{color: '#fff', fontWeight: '700'}}>SUBMIT
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }

    launchVolumesScreenIfAllFormsFilled = (volumes) => {

        let totalVolume = 0.0;

        for(let i in volumes){
            let volume = parseFloat(volumes[i]);
            if(volume < 0.00) {
                Alert.alert("Error", "Fill all fields before hitting the submit button");
                totalVolume = -1;
                return;
            } else {
                totalVolume += volume;
            }
        }

        this.props.navigation.navigate('LogVolumes', {volumes: volumes, totalVolume: totalVolume.toPrecision(4)});
    }
}

