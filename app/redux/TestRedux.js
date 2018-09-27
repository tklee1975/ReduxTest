import React, {Component} from 'react';
//import Home from './components/Home/Home.component';
import {StyleSheet, Button, Text, View} from 'react-native';

import {testLog} from './actions/index.actions';
import {TEST_INC_COUNTER} from './actions/index.actions';


import {connect} from 'react-redux';

class TestRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "counter" : 0,
      "mainState" : JSON.stringify(this.props.state)
    };
  }

  onPress1 = () => {
    console.log("Button is pressed. counter=" + this.state.counter);

    let newCounter = this.state.counter + 1;
    //this.setState( { "counter" : newCounter });
    this.props.state.test = {"test" : newCounter};

    this.state.mainState = JSON.stringify(this.props.state);
    this.state.counter = newCounter;
    
    this.setState({});  // notify that the state are updated
    
    console.log("core state" + JSON.stringify(this.props.state));
  }

  onPress2 = () => {
    console.log("Button is pressed. counter=" + this.state.counter);

    let newCounter = this.state.counter - 1;
    //this.setState( { "counter" : newCounter });
    this.props.state.test = {"test" : newCounter};
    this.props.state.test2 = {"counter" : newCounter};



    this.setState({
      "mainState" : JSON.stringify(this.props.state),
      "counter" : newCounter
    });
    
    console.log("core state" + JSON.stringify(this.props.state));
  }

  incCounter = () => {
    this.setState( { "counter" : this.state.counter+1});
  }

  onPressTestAction = () => {
    console.log("onPressTestAction is pressed");

    this.incCounter();

    this.props.test("testing_" + this.state.counter); // See const mapDispatchToProps = (dispatch) => {
    //this.props.dispatch()
  
    //dispatch(TEST_ACTION);
    console.log("core state" + JSON.stringify(this.props.state));
    this.setState({});  // update the current state
  }


  onPressIncreaseCounter = () => {
    this.props.dispatch(
      {type : TEST_INC_COUNTER, payload:{}} 
    );

  }

  render () {
    console.log(this.props.state); // eslint-disable-line
    return (
      <View style={styles.container}>
        <Text>
            { this.state.mainState }
        </Text>
        <Text>
            { this.state.counter }
        </Text>
        <Text>
            { this.props.testMsg }
        </Text>
        <Text>
            Counter: { this.props.testCounter }
        </Text>
        <Button title="Test+1" onPress={this.onPress1} />
        <Button title="Test-1" onPress={this.onPress2} />
        <Button title="TestAction" onPress={this.onPressTestAction} />
        <Button title="IncCounter" onPress={this.onPressIncreaseCounter} />
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

// Mapping State to Props
const mapStateToProps = (state) => {
  return {
    state : state,              // Full State 
    testMsg : state.test.msg,    // Message 
    testCounter : state.test.counter
  }
};

// Mapping Dispatcher to Props
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch : dispatch, 
    test: (msg) => {      // This create this.props.test('some message');
      dispatch(testLog(msg))
    }
  }
};

// Export for usage 
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);