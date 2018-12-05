import React, {Component} from 'react';
import {
    Body, Button, Container, Content, Header, Icon, Left, Right, Text
} from "native-base";
import {StyleSheet} from "react-native";
import LogVolume from "../components/LogVolume";
import LogVolumeFooter from "../components/LogVolumeFooter";

export default class LogVolumesScreen extends Component {

    static navigationOptions = {
        header: null
    };

    loadLogVolumes = () => {

        let volumes = this.props.navigation.getParam('volumes', 0);
        this.array = [];

        for (let i in volumes) {
            this.array.push(<LogVolume key={i} badge={parseInt(i) + 1} volume={volumes[i] + ' m3'}/>)
        }
        return this.array;
    };

    loadLogVolumeFooter = () => {
        let totalVolume = this.props.navigation.getParam('totalVolume', -1);

        if (totalVolume > -1) {
            return <LogVolumeFooter totalVolume={totalVolume}/>;
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
                    <Text style={{color: '#fff'}}>Log Volumes</Text>
                    </Body>
                </Header>

                <Content>
                    {
                        this.loadLogVolumes()
                    }
                </Content>

                {
                    this.loadLogVolumeFooter()
                }

            </Container>
        );
    }
}
