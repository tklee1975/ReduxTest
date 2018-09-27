import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailScreen extends React.Component {
    // constructor() {
    //     super();
    // }

    gotoMoreDetail = () => {
        this.props.navigation.navigate('MoreDetail');
        //this.props.navigation.navigate('Detail');
    }

    render() {
        
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>

            <Button title="More Detail" onPress={ this.gotoMoreDetail } />

            <Button title="Go Back" onPress={ () => this.props.navigation.goBack() } />
        </View>
        );
    }
}
