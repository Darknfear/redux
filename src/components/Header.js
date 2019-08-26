import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'

import {toggleIsAdding} from '../redux/actions/actionCreatots'
class Header extends Component {
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#999999", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Text></Text>
                <Text style={{ fontSize: 25 }}>My Word</Text>
                <TouchableOpacity
                    onPress={() => this.props.showForm()}>
                    <Text style={{ fontSize: 25 }}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapDispatchToProps(dispatch){
    return{
        showForm : () => dispatch(toggleIsAdding())
    }
}

export default connect(null,mapDispatchToProps)(Header);