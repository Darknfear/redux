import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'

import FlatListItemInMain from './flatlistitem/FlatlistItemInMain'
import Filter from './Filter'
import Header from './Header'
import Form from './Form'

class Main extends Component {

    getListWords() {
        const { myFilter, arrayWords } = this.props

        if (myFilter === "MEMORIZED") return arrayWords.filter(e => e.memorized);
        if (myFilter === "PRACTICE") return arrayWords.filter(e => !e.memorized);
        return arrayWords;
    }
    render() {

        return (
            <View style={{ flex: 1, alignSelf: "stretch" }}>
                <Header/>
                {this.props.isAdding ? <Form /> : null}
                <View style={{ flex: 10, marginTop: 10 }}>

                    <FlatList
                        data={this.getListWords()}
                        keyExtractor={(item, idenx) => item.id}
                        renderItem={({ item, idenx }) => {
                            return (
                                <FlatListItemInMain index={idenx} item={item} />
                            );
                        }} />
                </View>
                <Filter />
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        arrayWords: state.arrayWords,
        myFilter: state.filterStatus,
        isAdding : state.isAdding
    }
}
export default connect(mapStateToProps)(Main)