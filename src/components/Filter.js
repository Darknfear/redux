import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import { setFilterStatus } from '../redux/actions/actionCreatots'

class Filter extends Component {
    constructor(props) {
        super(props)
    }

  
    getStyleText(statusName) {
        const { myFilterStatus } = this.props
        if (statusName == myFilterStatus) return { color: "red", fontWeight: ' bold' }
        return { color: "white" }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                    onPress={() => this.props.setStatus("FILTER_SHOW_ALL")}
                    style={{ width: "30%", height: "70%", margin: 6, padding: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#696969", borderRadius: 5 }}>
                    <Text style={this.getStyleText("SHOW_ALL")}>SHOW ALL</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={() => this.props.setStatus("FILTER_MEMORIZED")}
                    style={{ width: "30%", height: "70%", margin: 6, padding: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#696969", borderRadius: 5 }}>
                    <Text style={this.getStyleText("MEMORIZED")}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.setStatus("FILTER_NEED_PRACTICE")}
                    style={{ width: "30%", height: "70%", margin: 6, padding: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#696969", borderRadius: 5 }}>
                    <Text style={this.getStyleText("PRACTICE")}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFilterStatus: state.filterStatus
    }
}
function mapDispatchToProps (dispatch){
    return {
        setStatus : (actionType) => dispatch(setFilterStatus(actionType))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)