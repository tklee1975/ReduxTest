import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor() {
        super();

        console.log(" HomeScreen Constructor");
    }

    gotoDetail = () => {
        console.log("gotoDetail is called");
        this.props.navigation.navigate('Detail');
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:20}}>Home Screen</Text>

            <Button title="Go to Detail" onPress={this.gotoDetail} />
        </View>
        );
    }
}
