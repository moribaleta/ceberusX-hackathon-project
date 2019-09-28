import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";

export default class TutorialView extends Component {

    navigation
    formviewer

    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
            openList: false
        }

        console.log(props)
        //this.navigation = props.navigation
    }

    openList(value) {
        /* this.openList = value */
        this.setState({ openList: value })
    }



    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>{this.state.item.name}</Text>
                    <Image style={styles.backgroundImage} source={{ uri: 'https://images.unsplash.com/photo-1546552356-3fae876a61ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80' }} />
                    <Text style={styles.description}>{this.state.item.description}</Text>

                    <TouchableOpacity style={styles.takeExam} onPress={() => { this.openList(!this.state.openList) }}>
                        <Text>{this.state.openList ? "Close List" : "Expand List"}</Text>
                    </TouchableOpacity>

                    {
                        (this.state.openList) ?
                            this.renderList()
                            : null
                    }

                </ScrollView>
            </View>
        )
    }

    renderList() {
        return (
            <View style={styles.submodule_container}>
                {
                    this.state.item.submodules.map((submodule) => {
                        return (
                            <View>
                                <Text>{submodule.id + ". " + submodule.name}</Text>
                                <Text>{submodule.description}</Text>
                                {
                                    submodule.map((instruction) => {
                                        <Text>{instruction}</Text>
                                    })
                                }
                            </View>
                        )
                    })
                }
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

    submodule_container: {
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