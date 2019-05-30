import React, {Component} from 'react';
import {View,Text,TouchableWithoutFeedback,ImageBackground,Image} from 'react-native'

export default class Aks extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('aval')
        },3000)
    }

    render() {
        return (
            <View style={{  flex:1,
               alignItems:"center",
                justifyContent: "center",

                top:20}}>
                <Image  source={require('./../img/akhbar.png')}/>
                <Text style={{
                    fontSize:20,
                    color:"purple",
                    fontWeight: "bold"
                }}> اخبار صادراتی </Text>
            </View>
        );
    }
}

