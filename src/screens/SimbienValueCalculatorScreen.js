import React, {Component} from 'react';
import {
    Badge,
    Body, Button, Container, Footer, FooterTab, Grid, Header, Icon, Left, Text
} from "native-base";
import SimbienValueForm from "../components/SimbienValueForm";
import {Row} from "react-native-easy-grid";
import {Alert} from "react-native";

export default class SimbienValueCalculatorScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            smalianValue: -1
        }
    }

    callback = (smalianValue) => {
        this.setState({smalianValue});
    };

    loadFooter = () => {

        if (this.state.smalianValue > -1) {
            return <Footer>
                <FooterTab style={{backgroundColor: '#2ecc71'}}>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Badge style={{marginTop: 8, backgroundColor: '#fff'}}><Text
                            style={{color: '#2ecc71'}}>T</Text></Badge>
                        <Text style={{marginRight: 10, color: '#fff'}}>TOTAL VOLUME</Text>
                        <Text style={{color: '#fff'}}>{this.state.smalianValue} m3</Text>
                    </Row>
                </FooterTab>
            </Footer>;
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
                    <Text style={{color: '#fff'}}>Ready Reckoner</Text>
                    </Body>
                </Header>

                <Grid>
                    <SimbienValueForm ref={"simbienValueForm"} parentScreen={this}/>
                </Grid>

                {
                    this.loadFooter()
                }
            </Container>
        );
    }
}
