import {View, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';
import Counter from './Counter';
import Login from './Login';
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0, // 1
    };
  }

  renderScreen = () => {
    switch (this.state.screen) {
      case 1: {
        return <Login />;
      }
      case 2: {
        return <Counter />;
      }
      default: {
        return null;
      }
    }
  };

  // renderButtons = () => {
  //   return (
  //     <View>
  //       <Button
  //         title="Go to Login"
  //         onPress={() => this.setState({screen: 0})} //This is for Login
  //       />
  //       <Button
  //         title="Go to Counter"
  //         onPress={() => this.setState({screen: 1})} // THis is for Counter
  //       />
  //     </View>
  //   );
  // };

  render() {
    return (
      <View style={styles.main}>
        <Header />
        <Button
          title="Go to Login"
          onPress={() => this.setState({screen: 1})} //This is for Login
        />
        <Button
          title="Go to Counter"
          onPress={() => this.setState({screen: 2})} // THis is for Counter
        />
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 40,
    width: '100%',
  },
});
