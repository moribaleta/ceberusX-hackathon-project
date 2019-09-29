import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from "react-native";

export default class Profile extends Component {

    url = 'https://drive.google.com/file/d/1sDTcAt1TJYwfFd210bDTxmfvzpO3yl1j/view?usp=sharing'

    handleClick = () => {
        Linking.canOpenURL(this.url).then(supported => {
            if (supported) {
                Linking.openURL(this.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: "https://www.phnompenhpost.com/sites/default/files/styles/image_780x440/public/field/image/9-ph.jpg?itok=0bpAiOvF" }}></Image>
                    <Text style={styles.name}>Jason Saguido</Text>
                    <Text style={styles.status}>Available</Text>
                </View>

                <View style={styles.message_container}>
                    <Text style={styles.label}>Pre Exam Result</Text>
                    <Text style={styles.value}>Has accomplished required Pre Exam Result</Text>
                    <Text style={styles.value}>Eligble for employment qualification exam</Text>
                </View>

                <View style={[styles.message_container, { flex: 1 }]}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.value}>
                        Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.
                        - The job purpose is usually no more than four sentences long
                    </Text>
                </View>

                <TouchableOpacity onPress={this.handleClick}>
                    <View style={styles.button}>
                        <Text style={styles.button_text}>Open Resume</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* alignItems: 'center', */
        /* justifyContent: 'flex-start', */
        padding: 10,
        backgroundColor: '#EFF0F1'
    },

    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 20
    },

    status: {
        fontSize: 16,
        color: '#344890',
        marginBottom: 50
    },

    name: {
        fontSize: 18,
        marginBottom: 10
    },

    image_container: {
        width: '100%',
        alignItems: 'center'
    },

    message_container: {
        marginBottom: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5
    },

    button: {
        backgroundColor: '#28b9aa',
        width: '100%',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 20,
    },

    button_text: {
        color: '#ffffff'
    }

})