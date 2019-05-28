/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

import Result from './Components/Result';
import Button from './Components/ResultButton';

import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, creaetAppContainer, createAppContainer} from "react-navigation"

class App extends Component {
  
  
  constructor(props) {
    super(props);
    
    defaultBackgroundColor = "white"
    defaultTextColor = "black"
    defaultStatus = "unfinished"
    this.state = {
        list:[
            {text: "باید احتمال بخوانم", backgroundCl: defaultBackgroundColor, textCl: defaultTextColor, status: defaultStatus},
            {text: "بهتر است به آنجا برورم", backgroundCl: defaultBackgroundColor, textCl: defaultTextColor, status: defaultStatus},
            {text:  "شاید فردا باران بیاید", backgroundCl: defaultBackgroundColor, textCl: defaultTextColor, status: defaultStatus}
        ],
    }

    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.setDone = this.setDone.bind(this);
    this.goToResult = this.goToResult.bind(this);
    
  }

  deleteJob(id) {
    let {list} = this.state;

    list = list.filter((item, index) => {
      if(index != id) {
        return item;
      }
    })

    this.setState({
      list
    })
  }

  goToResult() {

    const {list} = this.state;

    unfinishedTasks = list.reduce((total, item) => {
      if(item.status == "unfinished") {
        console.log(item.status); 
        total++;
      }
      return total;
    }, 0)
    
    this.props.navigation.navigate("Result", {
        "unfinishedTasks" : unfinishedTasks,
    })
  }


  setDone(id) {
    let {list} = this.state;

    DoneItem = list.splice(id, 1)[0];
    DoneItem.backgroundCl = "green";
    DoneItem.textCl = "white";
    DoneItem.status = "finished";

    list.push(DoneItem);

    this.setState({
      list
    })
  }
  
  addJob(title) {
    
    const {list} = this.state;
    list.push({
      text: title,
      backgroundCl: "white",
      textCl : "black",
      status: "unfinished"
    });
    console.log(list)
    this.setState({
      list: list,
    })
    console.log("added")
  }

  render() {
    return (
      <View style={styles.container}>
        <ToDoForm addJob={this.addJob}/>
        <ToDoList
          list={this.state.list} 
          deleteHandler={this.deleteJob}
          setDone={this.setDone}
         />
         <Button destiny={this.goToResult}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Main: {
    screen: App,
  },
  Result: {
    screen: Result,
  },
  initialRouteName: "Main"
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});


export default createAppContainer(AppNavigator)