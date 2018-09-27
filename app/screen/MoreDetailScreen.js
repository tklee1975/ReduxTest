import React from 'react';
import { View, Text, Button } from 'react-native';

export default class MoreDetailScreen extends React.Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'More Details',
        headerStyle: {
            backgroundColor: '#faa0',
        },
    };

    render() {
        
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>More Detail Screen</Text>

            <Button title="Go Back" onPress={ () => this.props.navigation.goBack() } />
        </View>
        );
    }
}
