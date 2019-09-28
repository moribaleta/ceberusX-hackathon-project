import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExamCell from './ExamCell'
import {getSampleExamModule} from '../../utilities/utilities'

export default class ExamList extends Component {

    state = {
        list : []
    }

    componentDidMount(){
        let list = getSampleExamModule()
        this.setState({list : list})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={this.state.list} 
                    renderItem={(item) => {
                        return <ExamCell item={item.item} index={item.index} />
                    }}
                />
            </View>
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
    }
})