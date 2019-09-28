import React, { Component } from "react";
import { View, Text, StyleSheet,Linking, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import { appState } from '../../utilities/utilities'

export default class TutorialView extends Component {

    navigation
    formviewer

    constructor(props) {
        super(props)
        this.state = {
            item: appState.item,
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
                    <Image style={styles.backgroundImage} source={{ uri: this.state.item.imageUrl }} />
                    <Text style={styles.description}>{this.state.item.description}</Text>

                    {
                        this.state.item.submodules != null ?
                            <View style={styles.button_container}>
                                <TouchableOpacity style={styles.takeExam} onPress={() => { this.openList(!this.state.openList) }}>
                                    <Text>{this.state.openList ? "Close List" : "Expand List"}</Text>
                                </TouchableOpacity>
                            </View> : null

                    }


                    {
                        (this.state.openList) ?
                            this.renderList()
                            : null
                    }

                </ScrollView>
            </View>
        )
    }

    handleClick = (link) => {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

    renderList() {
        return (
            <View style={styles.submodule_container}>
                {
                    this.state.item.submodules.map((submodule) => {
                        return (

                            <TouchableOpacity style={styles.topic} onPress={() => {
                                this.handleClick(submodule)
                            }}>
                                <Text>
                                   open document
                                </Text>
                            </TouchableOpacity>

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
        width: '100%',
        alignItems: 'center'
    },

    takeExam: {
        height: 30,
        width: 100,
        backgroundColor: '#B7B4B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    topic: {
        minWidth: 100,
        width: '100%',
        padding: 10,
        borderBottomColor :'#333',
        borderBottomWidth : 0.5
    }
})