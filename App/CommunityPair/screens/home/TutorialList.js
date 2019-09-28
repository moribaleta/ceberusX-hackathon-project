import React, { Component } from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import TutorialCell from "./TutorialCell"
import {getSampleTrainingModule} from '../../utilities/utilities'

export default class TutorialList extends Component {

    state = {
        list : []
    }

    componentDidMount(){
        let list = getSampleTrainingModule()
        this.setState({list : list})
    }

    onSelectItem() {
        self.props.navigation.push()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={this.state.list} 
                    renderItem={(item) => {
                        return <TutorialCell 
                            onPress={() => {
                                self.onSelectItem()
                            }}
                            item={item.item} 
                            index={item.index} />
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