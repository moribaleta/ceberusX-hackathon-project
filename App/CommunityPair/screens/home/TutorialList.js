import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList,ScrollView } from "react-native";
import TutorialCell from "./TutorialCell"
import { getSampleTrainingModule, appState } from '../../utilities/utilities'

export default class TutorialList extends Component {


    state = {
        list: []
    }

    componentDidMount() {
        let list = getSampleTrainingModule()
        this.setState({ list: list })
    }

    onSelectItem(item) {
        appState.item = item
        this.props.navigation.push('TutorialView')
    }

    render() {
        return (

            <ScrollView style={styles.container}>
                <Text style={styles.header}>Home</Text>
                <FlatList
                    style={styles.list}
                    data={this.state.list}
                    renderItem={(item) => {
                        return <TutorialCell
                            onPress={() => {
                                this.onSelectItem(item.item)
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
    message: {

    },
    list: {
        flex: 1
    },
    header: {
        fontSize: 32,
        padding: 10,
        fontWeight: 'bold'
    }
})