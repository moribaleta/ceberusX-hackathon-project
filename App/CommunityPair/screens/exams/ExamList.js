import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList,ScrollView, Image} from "react-native";
import ExamCell from './ExamCell'
import {getSampleExamModule, appState, getPreExam} from '../../utilities/utilities'
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ExamList extends Component {

    state = {
        list : []
    }

    componentDidMount(){
        let list = getSampleExamModule()
        this.setState({list : list})
    }

    onSelect(item) {
        appState.item = item
        console.log(item)
        this.props.navigation.push('ExamView')
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Exams</Text>
                <View style={styles.preexam}>
                    <Image style={styles.preexam_image} source={require('../../components/preExam.png')}></Image>
                    <Text style={styles.title}>Take Our Pre-Examinations Now</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.onSelect(getPreExam())
                    }}>
                        <Text style={styles.button_text}>Exam Here ></Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={styles.list}
                    data={this.state.list} 
                    renderItem={(item) => {
                        return <ExamCell 
                                onPress={() => {
                                    this.onSelect(item.item)
                                }}
                                item={item.item} 
                                index={item.index} />
                    }}
                />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    message : {

    },
    list: {
        flex: 1
    },

    header: {
        fontSize: 32,
        padding: 10,
        fontWeight: 'bold'
    },
    preexam : {
        height: 250,
        padding: 20,
        backgroundColor: '#5EB5A8',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },

    preexam_image: {
        height: 250,
        width: '100%',
        /* resizeMode: , */
        position: 'absolute',
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    button: {
        padding: 10,
        width: 120,
        backgroundColor: '#6B52AE'
    },
    button_text: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})