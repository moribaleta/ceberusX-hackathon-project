import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker } from "react-native";
import ExamCell from './ExamCell'
import RNPickerSelect from 'react-native-picker-select'

export default class ExamList extends Component {

    state = {
        list: [],
    }

    constructor(props) {
        super(props)
        this.state = {
            list: props.item.entries
        }


        console.log("form %o", this.state)
    }

    render() {

        var entries = []

        for (var i = 0; i < this.state.list.length; i++) {
            let field = this.generateEntryField(i, this.state.list[i])
            entries.push(field)
        }

        return (
            <View style={styles.container}>
                {
                    entries
                    //this.state.list.map((index, entryField) => )
                }
            </View>
        )
    }

    onSave() {
        return this.state.list
    }

    generateEntryField(index, item) {
        console.log("sample entry %o %o", item, index)
        if (item.type == "text") {
            return this.generateText(item, index)
        } else {
            return this.generateDropdown(item, index)
        }
    }

    changeValue(text, index) {
        var list = this.state.list
        list[index].value = text
        /* let item = this.state.list[index]
        item.value = text */
        this.setState({ list: list })
    }

    generateText(item, index) {
        return (
            <View style={styles.entryContainer}>
                <Text>{item.labelname}</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => { this.changeValue(text, index) }} />
            </View>
        )
    }

    generateDropdown(item, index) {

        let options = item.options.map((option) => {
            return { label: option, value: option }
        })

        return (
            <View style={styles.entryContainer}>
                <Text>{item.labelname}</Text>
                {/* <Picker
                    selectedValue={item.value}
                    style={styles.picker}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) =>
                        this.changeValue(itemValue, index)
                    }>
                    {
                        item.options.map((option) => {
                            return <Picker.Item label={option} value={option} />
                        })
                    }
                </Picker>
                <Text style={styles.text}> {item.value}</Text>  */}


                <RNPickerSelect
                    style={styles.picker}
                    onValueChange={(value) => this.changeValue(value, index)}
                    items={
                        options
                    }
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    },
    message: {

    },
    entryContainer: {
        marginBottom: 10,
        padding: 5
    },

    label: {

    },

    textInput: {
        borderColor: "#333333",
        borderWidth: 1,
        padding: 5,
    },

    picker: {
        height: 30,
        width: '100%',
        borderColor: "#333333",
        borderWidth: 1,
    },

    text: {
        color: '#666666'
    }
})