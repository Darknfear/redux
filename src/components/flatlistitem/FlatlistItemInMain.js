import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {  connect } from 'react-redux'

import { toggleMemorized,toggleShow} from '../../redux/actions/actionCreatots'

class FlatListItemInMain extends Component {
    constructor(props) {
        super(props)
           
    }

    
    render() {
        const { en, vn, memorized,isShow,id } = this.props.item
        const textDecorationLine = memorized ? "line-through" : "none"
        const textInButtonMemorized = memorized ? "forget" : "memorized"
        const meaning = isShow ? vn : "-----"
        const textButtonShow = isShow ? "hide" : "show"

        return (
            <View style={{ flex: 1, backgroundColor: "#D3D3D3", borderWidth: 1, borderRadius: 5, margin: 5, padding: 10 }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ textDecorationLine }}>{en}</Text>
                    <Text>{meaning}</Text>
                </View>
                <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "space-around",marginTop : 5 }}>
                    <View style={{ flex: 1 , alignItems : "center"}}>
                        <TouchableOpacity 
                        onPress={ () => this.props.Memorized(id)}
                        style={{ height: "100%", width: "50%", backgroundColor: "#696969", borderRadius: 5, justifyContent: "center", alignItems: "center",flex : 1 }}>
                            <Text>{textInButtonMemorized}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex : 1,alignItems : "center"}}>
                        <TouchableOpacity 
                        onPress={() => this.props.Show(id)}
                        style={{ height: "100%", width: "50%", backgroundColor: "#696969", borderRadius: 5, justifyContent: "center", alignItems: "center",flex : 1 }}>
                            <Text>{textButtonShow}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {
        Memorized : (id) => dispatch(toggleMemorized(id)),
        Show : (id) => dispatch(toggleShow(id))
    }
}
export default connect(null,mapDispatchToProps)(FlatListItemInMain);