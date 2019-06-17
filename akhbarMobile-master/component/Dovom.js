import React, { Component } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Linking,
    ImageBackground
} from "react-native";
import { Header } from "native-base";
import Data from "./Data2";

class Dovom extends Component {
    Aval=()=>{
        return this.props.navigation.navigate('aval')
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header
                    style={{
                        backgroundColor: "red"
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            top: 15,
                            fontSize: 20
                        }}
                    >
                        اخبار صادراتی
                    </Text>
                </Header>

                <ScrollView
                    style={{
                        flex: 1,
                        alignSelf: "stretch"
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {Data.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flex: 1,

                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "stretch",
                                marginTop: index == 0 ? 30 : 100,
                                marginBottom: index == Data.length ? 0 : 30,
                                marginHorizontal: 15
                            }}
                            onPress={this.openLink}
                        >
                            <ImageBackground
                                source={item.image}
                                style={{
                                    flex: 1,
                                    width:150,
                                    height:150,
                                    left:70


                                }}
                            >
                                <Text
                                    style={{
                                        color: "black",
                                        right:170,
                                        top:40,
                                        fontSize: 20
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </ImageBackground>


                        </TouchableOpacity>

                    ))}
                    <TouchableWithoutFeedback
                        onPress={this.Aval}

                    >

                        <Text
                            style={{
                                color:"black",
                                fontSize:20,
                                left:180
                            }}
                        >1</Text>
                    </TouchableWithoutFeedback>

                </ScrollView>

            </View>
        );
    }
}

export default Dovom;
