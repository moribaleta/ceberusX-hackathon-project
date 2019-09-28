import React, { Component } from "react";
import { View, Text, StyleSheet,ListView } from "react-native";
import TutorialCell from "./TutorialCell"
import {getSampleTrainingModule} from '../../utilities/utilities'

export default class Home extends Component {

    state = {
        list : []
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    style={styles.list}
                    dataSource={this.state.list} 
                    renderRow={(tutorial) => {
                        return <TutorialCell props={tutorial} />
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

    }
})