import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default class CardView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            /* background  : props.imageUrl */
        }
    }


    render() {

        console.log("state %o", this.state)
        console.log("name: %s", this.state.name)
        return (
            <View style={styles.entry}>
                <Text style={styles.name}>{this.state.name}</Text>
                <Image style={styles.background} source={{ uri: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' }}></Image>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    entry: {
        minHeight: 200,
        flex: 1,
        borderRadius: 10,
        alignItems: 'baseline',
        justifyContent: 'flex-end',
    },

    name: {
        color: "#ffffff",
        fontSize: 18,
        zIndex: 1,
        padding: 20
    },

    background: {
        borderRadius: 10,
        minHeight: 200,
        width: '100%',
        minWidth: 300,
        position: 'absolute',
        backgroundColor: "#000222"
    }
})