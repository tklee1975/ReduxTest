import React, {Component} from 'react';
//import Home from './components/Home/Home.component';
import {StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux';

class AppMain extends Component {
  render () {
    console.log(this.props.state); // eslint-disable-line
    return (
        <View style={styles.container}>
        <Text>
            { JSON.stringify(this.props.state) }
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

// Setup the connection 
const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

// Export for usage 
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);