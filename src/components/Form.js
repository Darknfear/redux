import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux'

import { toggleIsAdding,addWord } from '../redux/actions/actionCreatots'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: "",
            vn: ""
        }
        this.onAdd = this.onAdd.bind(this)
    }
    onAdd() {
        const { en, vn } = this.state
        this.props.addWord(en,vn)
        this.props.isAdding()
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={Text => {
                        this.setState({
                            en: Text
                        })
                    }}
                    placeholder="en"
                    style={{ height: 40, paddingHorizontal: 5, borderBottomWidth: 1 }} />
                <TextInput
                    onChangeText={Text => {
                        this.setState({
                            vn: Text
                        })
                    }}
                    placeholder="vn"
                    style={{ height: 40, paddingHorizontal: 5, borderBottomWidth: 1 }} />
                <TouchableOpacity
                    onPress={this.onAdd}
                    style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state){
    return {
        arrayWords : state.arrayWords
    }
}
function mapDispatchToProps(dispatch){
    return {
        addWord : (en,vn) => dispatch(addWord(en,vn)),
        isAdding : () => dispatch(toggleIsAdding())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)