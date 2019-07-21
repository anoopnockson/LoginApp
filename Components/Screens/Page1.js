import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image} from 'react-native'

export default class Page1 extends React.Component{

    render(){
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{alignSelf:'center'}}>
                    <Text style={{fontSize:36}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

