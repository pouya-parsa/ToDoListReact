import React from 'react'

import {
    Text,
    View,
} from 'react-native'

import {Button} from 'react-native-elements';


class ResultButton extends React.Component {
    render() {
        return(
            <Button
                title="Report"
                onPress={this.props.destiny}
                buttonStyle={{backgroundColor: "#49BA88"}}
            />
        );
    }
}

export default ResultButton;