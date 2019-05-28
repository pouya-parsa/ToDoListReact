import React, {Component} from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

class ToDoFrom extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            jobTitle: " "
        }
        
        this.addJob = this.addJob.bind(this)
        this.jobTitleChaned = this.jobTitleChaned.bind(this)
    }

    addJob(e) {
        this.props.addJob(this.state.jobTitle)
    }

    jobTitleChaned(title) {
        this.setState({
            jobTitle: title,
        })
    }
    
    render() {

        const {name} = this.props;
        return(
            <View style={styles.container}>
                
                <Button
                    large
                    icon={
                        <Icon
                            name="plus-square"
                            size={30}
                            color="white"
                         />
                    }
                    
                    title="اضافه کن  "
                    buttonStyle={styles.addButton}
                    titleStyle={styles.addButtonTitle}
                    onPress={this.addJob}
                />

                <TextInput 
                    style={styles.titleText}
                    onChangeText={this.jobTitleChaned}
                    value={this.state.jobTitle}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        fontSize: 30,
        margin: 20,
    },
    titleText: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,   

    },
    addButton: {
        flex:1,
        backgroundColor: '#49BA88',
    },

    addButtonTitle: {
        fontWeight: "bold",
    }

})

export default ToDoFrom;