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

                    style={{
                    flex:1,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf:"stretch",

                        marginHorizontal: 15
                    }}
                  onPress={this.openLink}
                    >

                    <TouchableWithoutFeedback>
                    <Header style={{
                        backgroundColor:"red",
                        alignSelf:"stretch"
                    }}>
                        <Text

                            style={{
                                color:"white",
                                top:15,
                                fontSize:20
                            }}
                        >{Data[32].text}
                        </Text>

                    </Header>

                    </TouchableWithoutFeedback>



                                        <TouchableWithoutFeedback
                                            onPress={this.Tashil}

                                        >

                                            <ImageBackground

                                                source={Data[0].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    top:20,

                                                   left:100
                                                }}
                                            >
                                                <Text

                                                    style={{
                                                        right:170,
                                                        top:20,
                                                        color:"black",
                                                        fontSize:20
                                                    }}
                                                >
                                                    {Data[0].text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.ArzSadaraty}
                                        >

                                            <ImageBackground source={Data[1].image}

                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 flex:1,
                                                                 left:100,
                                                                top:40
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
                                                    {Data[1].text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Sazman}
                                        >
                                            <ImageBackground

                                                source={Data[2].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:60


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
                                                    {Data[2].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Khoshmaze}
                                        >
                                            <ImageBackground

                                                source={Data[3].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:80
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
                                                    {Data[3].text}

                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Bazargany}
                                        >
                                            <ImageBackground

                                                source={Data[4].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:100
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
                                                    {Data[4].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Rizesh}
                                        >
                                            <ImageBackground

                                                source={Data[5].image}

                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:120
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
                                                    {Data[5].text}
                                                </Text>


                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Sharayet}
                                        >
                                            <ImageBackground

                                                source={Data[6].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:140
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
                                                    {Data[6].text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Gerany}

                                        >
                                            <ImageBackground

                                                source={Data[7].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:160
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
                                                    {Data[7].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kham}
                                        >
                                            <ImageBackground

                                                source={Data[8].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:180
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
                                                    {Data[8].text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this. Barnagsht}
                                        >
                                            <ImageBackground

                                                source={Data[9].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:200
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
                                                    {Data[9].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={this.Angour}
                                        >
                                            <ImageBackground

                                                source={Data[10].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:210
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
                                                    {Data[10].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={this.Govat}
                                        >
                                            <ImageBackground

                                                source={Data[11].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:220
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
                                                    {Data[11].text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Zarfiat}
                                        >
                                            <ImageBackground

                                                source={Data[12].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:240
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
                                                    {Data[12].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Lir}
                                        >
                                            <ImageBackground

                                                source={Data[13].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:260
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
                                                    {Data[13].text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback


                                            onPress={this.Elam}
                                        >
                                            <ImageBackground

                                                source={Data[14].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,

                                                    left:100,
                                                    top:280
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
                                                    {Data[14].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Zanan}
                                        >
                                            <ImageBackground

                                                source={Data[15].image}
                                                style={{
                                                    width: 150,
                                                    height:150,

                                                    flex:1,
                                                    left:100,
                                                    top:300
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
                                                    {Data[15].text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback

                                            onPress={this.Pure}
                                        >
                                            <ImageBackground

                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:320
                                                }}
                                                source={Data[16].image}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    {Data[16].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kordestan}
                                        >
                                            <ImageBackground

                                                source={Data[17].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:340
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
                                                    {Data[17].text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Kahesh}
                                        >
                                            <ImageBackground

                                                source={Data[18].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:360
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
                                                    {Data[18].text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Daramad}
                                        >
                                            <ImageBackground
                                                source={Data[19].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:380
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
                                                    {Data[19].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Pay}
                                        >
                                            <ImageBackground

                                                source={Data[20].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:400
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
                                                    {Data[20].text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Bast}
                                        >
                                            <ImageBackground

                                                source={Data[21].image}
                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 flex:1,
                                                                 left:100,
                                                                 top:420
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
                                                    {Data[21].text}
                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Keshvar}
                                        >
                                            <ImageBackground

                                                source={Data[22].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:440
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
                                                    {Data[22].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Farsh}
                                        >
                                            <ImageBackground

                                                source={Data[23].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:460
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
                                                    {Data[23].text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback

                                            onPress={this.Roshed}
                                        >
                                            <ImageBackground

                                                source={Data[24].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:480
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
                                                  {Data[24].text}
                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Naft}
                                        >
                                            <ImageBackground

                                                source={Data[25].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:500
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
                                                    {Data[25].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={this.Piyaz}

                                        >
                                            <ImageBackground

                                                source={Data[26].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:520
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
                                                    {Data[26].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Farvardin}
                                        >
                                            <ImageBackground

                                                source={Data[27].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:540
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
                                                    {Data[27].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Khorma}

                                        >
                                            <ImageBackground

                                                source={Data[28].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:560
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
                                                    {Data[28].text}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback
                                            onPress={this.Nima}

                                        >
                                            <ImageBackground


                                                source={Data[29].image}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    flex:1,
                                                    left:100,
                                                    top:580
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
                                                    {Data[29].text}
                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback


                                            onPress={()=>{
                                                this.props.navigation.navigate('dovom')
                                            }}

                                        >
                                            <Text>{Data[30].text}</Text>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={()=>{
                                                this.props.navigation.navigate('sevom')
                                            }}

                                        >
                                            <Text>{Data[31].text}</Text>

                                        </TouchableWithoutFeedback>




                    </TouchableOpacity>
                ))}

            </ScrollView>

        );
    }
}