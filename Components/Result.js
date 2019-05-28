import React, {Component} from 'react'

import {Text, View, StyleSheet} from 'react-native';

class Result extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.TextWrapper}>
                    <Text style={[styles.unreachedGoal, {fontSize: 40, marginBottom:5}]}>
                        {this.props.navigation.getParam("unfinishedTasks")}
                    </Text>
                    <Text style={styles.unreachedGoal}>
                        unfinished tasks
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    TextWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        height: 250,
        backgroundColor: "#49BA88",
        borderRadius: 150,
        borderColor: "white",
        borderWidth: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 9,
        elevation: 14,
    },
    unreachedGoal: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    }

})

export default Result;