import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import Form from "./Form"
import { appState } from "../../utilities/utilities";

export default class ExamView extends Component {

    navigation
    formviewer

    constructor(props) {
        super(props)
        this.state = {
            item: appState.item,
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
                {
                    text: 'OK', onPress: () => {
                        this.openExam(false)
                    }
                },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{this.state.item.employer_id}</Text>
                    <Image style={[styles.backgroundImage, this.state.openExam ? {height: 80} : null ]} source={{ uri: this.state.item.imageUrl }} />
                    <Text style={styles.description}>{this.state.item.description}</Text>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.takeExam} onPress={() => { this.openExam(!this.state.openExam) }}>
                            <Text>{this.state.openExam ? "Cancel Exam" : "Open Exam"}</Text>
                        </TouchableOpacity>
                    </View>


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
                    item={this.state.item}
                    ref={
                        (ref) => {
                            this.formviewer = ref
                        }
                    }
                    style={styles.form}
                />
                <View style={styles.button_container}>
                    <TouchableOpacity
                        style={styles.takeExam}
                        onPress={() => { this.onSave() }}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: 24,
        position: 'absolute',
        zIndex: 1,
        padding: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    description: {
        marginBottom: 10,
        padding: 10
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

    button_container: {
        width : '100%',
        alignItems: 'center'
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