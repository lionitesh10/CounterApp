import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class App extends Component{
  state={count:0}
  increamentCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  decreamentCount=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  resetCount=()=>{
    this.setState({
      count:0
    })
  }
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.header}>
              <Text style={styles.headerText}>New Counter Application Hello !!</Text>
      </View>
  
      <View style={styles.counterSection}>
        <Text style={styles.counterText}>Count = {this.state.count}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.increamentCount()}><Text style={styles.btnText}>Increament</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=>this.decreamentCount()}><Text style={styles.btnText}>Decreament</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>this.resetCount()}><Text style={styles.btnText}>Reset</Text></TouchableOpacity>
      </View>
  
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    marginTop:25,
    backgroundColor:'pink',
    width:'100%',
    height:40,
    alignItems:'center',
  },
  headerText:{
    color:'white',
   fontSize:24,
  },
  counterSection:{
    alignItems:'center',
    justifyContent:'center'
  },
  counterText:{
    fontSize:24,
  },
  button:{
    borderWidth:3,
    padding:10,
    backgroundColor:'blue',
  },
  button1:{
    borderWidth:3,
    padding:10,
    backgroundColor:'green',
  },
  button2:{
    borderWidth:3,
    padding:10,
    backgroundColor:'red',
  },
  btnText:{
    color:'white',
  }
});
export default App;