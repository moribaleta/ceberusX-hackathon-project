import React, { Component } from "react";
import { View, Text, StyleSheet,ListView } from "react-native";
import {Employer} from "../../utilities/utilities"
import CardView from '../../components/card'
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

export default class ExamCell extends Component {

    constructor(props){
        super(props)
        this.state = {
            item    : props.item,
            index   : props.index
        }
    }


    render() {
        if (this.state.item != null) {
            console.log("state %o", this.state)
            console.log("name: %s", this.state.item.employer_id)
            return (
                <TouchableOpacity 
                    style={styles.entry}
                    onPress={this.props.onPress}
                    >
                    <CardView 
                        name={this.state.item.employer_id} 
                        image={this.state.item.imageUrl}
                        />
                </TouchableOpacity>
            )
        }else{
            console.log("dafuq")
            return <View></View>
        }
    }

}

const styles = StyleSheet.create({
    entry: {
        height: 200,
        width : "100%",
        padding: 10,
        marginBottom: 10,
    },
    message : {

    },
    list: {

    }
})