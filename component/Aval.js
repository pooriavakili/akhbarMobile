import React, {Component} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Linking,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import {Header,} from 'native-base'
export default class Aval extends Component {
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

                showsVerticalScrollIndicator={false}

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
                        >اخبار صادرتی</Text>

                    </Header>




                                        <TouchableWithoutFeedback
                                            onPress={this.Tashil}
                                        >

                                            <ImageBackground
                                                source={require('./../img/57877896.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
                                                    top:20
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
                                                    ارتباط بین صادرکننده و واردکننده تسهیل شود

                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.ArzSadaraty}
                                        >

                                            <ImageBackground source={require('./../img/57340470.jpg')}
                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 left:215,
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
                                                    قوه قضائیه با کسانی که ارز صادراتی را به کشور بر نگرداند برخورد کند

                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Sazman}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57881243.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    رشد 52 درصدی صادرات کالاهای غیرنفتی از گمرکات آذربایجان شرقی

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Khoshmaze}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57834989.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    محصولاتی خوشمزه‌ اما بدون بسته‌بندی شیک صادراتی


                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Bazargany}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57820588.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    اصلی‌ترین کالاهای صادراتی ایران کدامند؟

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Rizesh}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57661387.jpg')}

                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    ریزش واردات و صادرات غیرنفتی

                                                </Text>


                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Sharayet}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57836424.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    شرایط صادرات محصولات فلزی + اسامی شرکت‌های مجاز

                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Gerany}

                                        >
                                            <ImageBackground
                                                source={require('./../img/9-811-th2.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    گرانی مسکن ساکنان تهران را فراری داد

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Kham}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57779724.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    صادرات گوجه‌فرنگی نوعی "خام‌فروشی" است

                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this. Barnagsht}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57385681.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    ۳۰ میلیارد دلار ارز صادراتی از هیچ طریقی به کشور برنگشته است

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Angour}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57874241.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    تلاش ۲۰ ساله محققان دانشگاه تهران در تولید ۸ رقم انگور بی‌دانه حبه درشت صادراتی

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Govat}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57743891.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    نقاط قوت و ضعف دستورالعمل جدید ارزی بانک مرکزی

                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Zarfiat}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57614499.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    ظرفیت صادرات ۷۰۰ میلیون دلاری لوازم خانگی در سال ۹۸

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Lir}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57877255.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    لبخند«لیر» و چشمک استانبول به ایرانی‌ها

                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Elam}
                                        >
                                            <ImageBackground
                                                source={require('./../img/577878.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    آمار صادرات و واردات در فروردین ماه اعلام شد

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Zanan}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57419853.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
                                                    top:320
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
                                                    کاهش سهم زنان در مشاغل و پست‌های مدیریتی

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
                                                    left:215,
                                                    top:340
                                                }}
                                                source={require('./../img/57300672.jpg')}
                                            >
                                                <Text
                                                    style={{
                                                        right:170,
                                                        fontSize:17,
                                                        top:40,
                                                        color:"black",

                                                    }}
                                                >
                                                    دلارهایی که برای پوره و گربه می‌رود!

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Kordestan}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57805776.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
                                                    top:360
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
                                                    صادرات ۱۲۰ هزار دلاری محصولات پارک فناوری کردستان در سال گذشته

                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Kahesh}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57820588.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
                                                    top:380
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
                                                    صادرات و واردات ایران با کاهش قیمت آغاز شد

                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Daramad}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57875990.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    بهترین جایگزین درآمدهای نفتی

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Pay}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57597271.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    دولت ارز می‌دهد پای نظارتش هم بایستد!

                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Bast}
                                        >
                                            <ImageBackground source={require('./../img/57842869.jpg')}
                                                             style={{
                                                                 width: 150,
                                                                 height:150,
                                                                 left:215,
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
                                                    آمریکا چشمانش را روی رابطه برقی و گازی ایران و عراق بست

                                                </Text>

                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Keshvar}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57809326.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    دریافت عوارض بر صادرات در برخی گمرک‌های کشور!

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Farsh}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57814997.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    صادرات ۱.۵ میلیون یورویی فرش‌های نانویی ایران به ۲۵ کشور

                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback
                                            onPress={this.Roshed}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57343883.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    رشد ۶۰ درصدی صادرات اتصالات نانویی یکی از شرکت‌های دانش‌بنیان

                                                </Text>

                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Naft}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57324240.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    جوانان ثروت واقعی کشور هستند؛ نه نفت!

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Piyaz}

                                        >
                                            <ImageBackground
                                                source={require('./../img/575881631.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    ممنوعیت صادرات پیاز و سیب‌زمینی لغو شد

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Farvardin}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57820588.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    تراز تجاری فروردین مثبت ماند

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback
                                            onPress={this.Khorma}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57613489.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    نیکزادی‌پناه: از صادرات خرما جلوگیری نشود

                                                </Text>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>


                                        <TouchableWithoutFeedback
                                            onPress={this.Nima}
                                        >
                                            <ImageBackground
                                                source={require('./../img/57876548.jpg')}
                                                style={{
                                                    width: 150,
                                                    height:150,
                                                    left:215,
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
                                                    بازی دو سر سود صادرکنندگان با دلارهای نیما

                                                </Text>
                                            </ImageBackground>

                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={()=>{
                                                this.props.navigation.navigate('dovom')
                                            }}

                                        >
                                            <Text>2</Text>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback

                                            onPress={()=>{
                                                this.props.navigation.navigate('sevom')
                                            }}

                                        >
                                            <Text>3</Text>

                                        </TouchableWithoutFeedback>


            </ScrollView>





        );
    }
}