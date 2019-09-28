import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Exams extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>About Us</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    message : {

    }
})