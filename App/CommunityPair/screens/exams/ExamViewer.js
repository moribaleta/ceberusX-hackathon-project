import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import Form from "./Form"

export default class ExamView extends Component {

    navigation
    formviewer

    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
            openExam: false
        }

        console.log(props)
        //this.navigation = props.navigation
    }

    openExam(value) {
        /* this.openExam = value */
        this.setState({ openExam: value })
    }

    onSave() {
        let save = this.formviewer.onSave()

        Alert.alert(
            'Success',
            'you have finished the exam',
            [
              {text: 'OK', onPress: () => {
                  this.openExam(false)
              }},
            ],
            {cancelable: false},
          );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{this.state.item.employer_id}</Text>
                    <Image style={styles.backgroundImage} source={{ uri: 'https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80' }} />
                    <Text style={styles.description}>{this.state.item.description}</Text>

                    <TouchableOpacity style={styles.takeExam} onPress={() => { this.openExam(!this.state.openExam) }}>
                        <Text>{this.state.openExam ? "Cancel Exam" : "Open Exam"}</Text>
                    </TouchableOpacity>

                    {
                        (this.state.openExam) ?
                            this.renderForm()
                            : null
                    }

                </ScrollView>
            </View>
        )
    }

    renderForm() {
        return (
        <View style={styles.form_container}>
            <Form
                item={this.props.item}
                ref={
                    (ref) => {
                        this.formviewer = ref
                    }
                }
                style={styles.form}
            />
            <TouchableOpacity
                style={styles.takeExam}
                onPress={() => { this.onSave() }}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    title: {
        fontSize: 18
    },
    description: {
        marginBottom: 10
    },

    backgroundImage: {
        width: '100%',
        height: 300
    },

    form_container: {
        minHeight: 800,
        backgroundColor: "#0000"
    },

    form: {
        flex: 1
    },

    takeExam: {
        height: 30,
        width: 100,
        backgroundColor: '#B7B4B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})