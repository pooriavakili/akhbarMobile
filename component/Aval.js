import React, {Component} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Linking,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import {Header,} from 'native-base'
import Data from './Data'
export default class Aval extends Component {
    openLink=url=>{
        const baseUrl="https://akhbarsaderaty.liara.run/";
        Linking.openURL(baseUrl+url);
    }

    Tashil=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/tashil')
    }
    ArzSadaraty=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/arzsaderaty')
    }
    Sazman=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/sazman')
    }
    Khoshmaze=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/khoshmaze')
    }
    Bazargany=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/bazarghany')
    }
    Rizesh=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/rizesh')
    }
    Sharayet=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/sharayet')
    }
    Gerany=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/maskan')
    }
    Kham=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/kham')
    }
    Barnagsht=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/barnaghashet')
    }
    Angour=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/angour')
    }
    Govat=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/govat')
    }
    Zarfiat=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/zarfiat')
    }
    Lir=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/lir')
    }
    Elam=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/elam')
    }
    Zanan=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/zanan')
    }
    Pure=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/pore')
    }
    Kordestan=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/koredestan')
    }
    Kahesh=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/kahesh')
    }
    Daramad=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/daramad')
    }
    Pay=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/pay')
    }
    Bast=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/bast')
    }
    Keshvar=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/avarez')
    }
    Farsh=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/farsh')
    }
    Roshed=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/roshed')
    }
    Naft=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/vaghey')
    }
    Piyaz=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/pyaz')
    }
    Farvardin=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/farvardin')
    }
    Khorma=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/jologiry')
    }
    Nima=()=>{
        Linking.openURL('https://akhbarsaderaty.liara.run/sood')
    }
    render() {

        return (
            <ScrollView
                style={{
                    flex:1,
                    alignSelf: "stretch"
                }}
                showsVerticalScrollIndicator={false}
            >


                {Data.map((item,index)=>(
                    <TouchableOpacity
                        key={item.id}
                    style={{
                    flex:1,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf:"stretch",
                        marginTop: index==0?30:0,
                        marginBottom: index==Data.length?0:30,
                        marginHorizontal: 15
                    }}
                  onPress={this.openLink}
                    >


                    <Header style={{
                        backgroundColor:"red"
                    }}>
                        <Text
                            style={{
                                color:"white",
                                top:15,
                                fontSize:20
                            }}
                        >{item.text}</Text>

                    </Header>




                                        <TouchableWithoutFeedback
                                            onPress={this.Tashil}
                                         
                                        >

                                            <ImageBackground
                                              
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:20
                                                }}
                                            >
                                                <Text
                                                    key={item.id}
                                                    style={{
                                                        right:170,
                                                        top:20,
                                                        color:"black",
                                                        fontSize:20
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.ArzSadaraty}
                                        >

                                            <ImageBackground source={item.image}

                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 flex:1,
                                                                 alignItems:"center",
                                                                 justifyContent:"center",
                                                                 alignSelf:"stretch",

                                                                 paddingVertical:40
                                                             }}

                                            >
                                                <Text
                                                    style={{
                                                        right:170,

                                                        top:10,
                                                        color:"black",
                                                        fontSize:20
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Sazman}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:60
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:20,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Khoshmaze}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:80
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:20,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}

                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Bazargany}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:100
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Rizesh}
                                        >
                                            <ImageBackground

                                                source={item.image}

                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:120
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:20,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>


                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Sharayet}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:140
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:20,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Gerany}

                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:160
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:60,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kham}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:180
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this. Barnagsht}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:200
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={this.Angour}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:220
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={this.Govat}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:240
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Zarfiat}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:260
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Lir}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:280
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback


                                            onPress={this.Elam}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:300
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Zanan}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:320
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={this.Pure}
                                        >
                                            <ImageBackground

                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:340
                                                }}
                                                source={item.image}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kordestan}
                                        >
                                            <ImageBackground
                                                key={item.id}
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:360
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kahesh}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:380
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:60,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Daramad}
                                        >
                                            <ImageBackground
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:400
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Pay}
                                        >
                                            <ImageBackground
                                                key={item.id}
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:420
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Bast}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 flex:1,
                                                                 alignItems:"center",
                                                                 justifyContent:"center",
                                                                 alignSelf:"stretch",

                                                                 paddingVertical:440
                                                             }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Keshvar}
                                        >
                                            <ImageBackground
                                                key={item.id}
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:460
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Farsh}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:480
                                                }}
                                            >


                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback

                                            onPress={this.Roshed}
                                        >
                                            <ImageBackground
                                                key={item.id}
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:500
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                  {item.text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Naft}
                                        >
                                            <ImageBackground
                                                key={item.id}
                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:520
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Piyaz}

                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:540
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Farvardin}
                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:560
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}

                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Khorma}

                                        >
                                            <ImageBackground

                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:580
                                                }}
                                            >

                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}

                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback
                                            onPress={this.Nima}

                                        >
                                            <ImageBackground


                                                source={item.image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                    alignSelf:"stretch",

                                                    paddingVertical:600
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}

                                                >
                                                    {item.text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback


                                            onPress={()=>{
                                                this.props.navigation.navigate('dovom')
                                            }}

                                        >
                                            <Text>{item.text}</Text>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={()=>{
                                                this.props.navigation.navigate('sevom')
                                            }}

                                        >
                                            <Text>{item.text}</Text>

                                        </TouchableWithoutFeedback>




                    </TouchableOpacity>
                ))}

            </ScrollView>

        );
    }
}