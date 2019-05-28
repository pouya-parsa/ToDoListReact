import React, {Component} from 'react';

import Swipeout from 'react-native-swipeout';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.deleteRC = this.deleteRC.bind(this);
        this.setDone = this.setDone.bind(this); 
    }
    
    deleteRC(rowID) {
        this.props.deleteHandler(rowID);
    }

    setDone(rowId) {
        this.props.setDone(rowId);
    }

    render() {
        const {list} = this.props
        return(
            <ScrollView style={styles.container}>
                {
                    list.map((item, index) => {
                        // Buttons
                        const swipeoutBtns = [
                            {
                                type: 'delete',
                                text: 'حذف', 
                                onPress:(e) => {this.deleteRC(index)} ,
                            },
                            {
                                backgroundColor: '#49BA88',
                                text: 'تمام',
                                onPress:(e) => {this.setDone(index)},
                            },
                        ]
                        
                        return(
                            <Swipeout left={swipeoutBtns} style={styles.swipeItem} key={index} close = {true}>
                                <View style={[styles.swipeItemView, {backgroundColor: item.backgroundCl}]}>
                                    <Text  style={[styles.swipeItemText, {color: item.textCl}]}>{item.text}</Text>
                                </View>
                            </Swipeout>
                        )       
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: "white"
    },

    swipeItem: {
        height: 60,
        backgroundColor: "#e2e2e2",
        borderBottomWidth: 2,
        borderBottomColor: "#dcdcdc",
    },
    swipeItemView: {
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",


    },
    swipeItemText: {
        paddingRight: 20,
        fontWeight: "bold",
        fontSize: 16
    }
})

export default ToDoList;
