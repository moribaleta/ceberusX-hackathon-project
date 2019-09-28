import React, { Component } from "react";
import { View, Text, StyleSheet,ListView } from "react-native";
import {Employer} from "../../utilities/utilities"

export class TutorialCell extends Component {

    render() {
        return (
            <View style={styles.entry}>
                <Text>{this.props.name}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    entry: {
    
    },
    message : {

    },
    list: {

    }
})